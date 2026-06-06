<?php
// php-backend/enquiries.php

require_once 'config.php';

header('Content-Type: application/json');

// Helper function to verify authorization token
function getAuthenticatedUser() {
    $headers = apache_request_headers();
    
    // Check standard Authorization header (case-insensitive keys might occur)
    $authHeader = null;
    foreach ($headers as $key => $value) {
        if (strcasecmp($key, 'Authorization') === 0) {
            $authHeader = $value;
            break;
        }
    }

    if (!$authHeader) {
        // Fallback for some hosting configurations
        if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
        } elseif (function_exists('getallheaders')) {
            $allHeaders = getallheaders();
            foreach ($allHeaders as $key => $value) {
                if (strcasecmp($key, 'Authorization') === 0) {
                    $authHeader = $value;
                    break;
                }
            }
        }
    }

    if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
        return null;
    }

    $token = $matches[1];
    $parts = explode('.', $token);
    if (count($parts) !== 2) {
        return null;
    }

    list($payloadBase64, $signature) = $parts;
    
    // Re-verify signature
    $expectedSignature = hash_hmac('sha256', $payloadBase64, JWT_SECRET);
    if (!hash_equals($expectedSignature, $signature)) {
        return null;
    }

    // Decode and verify expiration
    $payload = json_decode(base64_decode($payloadBase64), true);
    if (!$payload || !isset($payload['exp']) || time() > $payload['exp']) {
        return null;
    }

    return $payload;
}

$user = getAuthenticatedUser();
if (!$user) {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized. Invalid or expired token.']);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    try {
        // Fetch all enquiries ordered by newest first
        $stmt = $pdo->query("SELECT * FROM enquiries ORDER BY created_at DESC");
        $enquiries = $stmt->fetchAll();

        echo json_encode([
            'status' => 'success',
            'data' => $enquiries
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to fetch enquiries. ' . $e->getMessage()]);
    }
} elseif ($method === 'DELETE') {
    // Check if ID is provided in query params or JSON body
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    
    if ($id <= 0) {
        $input = json_decode(file_get_contents('php://input'), true);
        $id = isset($input['id']) ? intval($input['id']) : 0;
    }

    if ($id <= 0) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Missing or invalid enquiry ID.']);
        exit;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM enquiries WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode([
            'status' => 'success',
            'message' => 'Enquiry deleted successfully.'
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete enquiry. ' . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed.']);
}
