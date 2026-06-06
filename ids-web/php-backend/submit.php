<?php
// php-backend/submit.php

require_once 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed. Use POST.']);
    exit;
}

// Get JSON raw input
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

// If input isn't JSON, try $_POST
if (!$input) {
    $input = $_POST;
}

// Extract and sanitize input
$firstName = isset($input['firstName']) ? trim($input['firstName']) : '';
$lastName = isset($input['lastName']) ? trim($input['lastName']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$phone = isset($input['phone']) ? trim($input['phone']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

// Validation
if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
    exit;
}

try {
    // Insert into database
    $stmt = $pdo->prepare("INSERT INTO enquiries (first_name, last_name, email, phone, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$firstName, $lastName, $email, $phone, $message]);

    echo json_encode([
        'status' => 'success',
        'message' => 'Enquiry submitted successfully.'
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to save enquiry. ' . $e->getMessage()
    ]);
}
