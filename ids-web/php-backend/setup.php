<?php
// php-backend/setup.php

require_once 'config.php';

header('Content-Type: application/json');

try {
    // Determine SQL dialects
    if ($db_type === 'mysql') {
        // Create Database if not exists (only if connected to server without database first, 
        // but since config connects to DB_NAME directly, we assume DB exists or we try to create tables)
        $queries = [
            "CREATE TABLE IF NOT EXISTS enquiries (
                id INT AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(100) NOT NULL,
                last_name VARCHAR(100) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(50) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )",
            "CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )"
        ];
    } else {
        // SQLite
        $queries = [
            "CREATE TABLE IF NOT EXISTS enquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )",
            "CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )"
        ];
    }

    // Run table creations
    foreach ($queries as $sql) {
        $pdo->exec($sql);
    }

    // Check if admin user already exists
    $adminUsername = 'admin';
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->execute([$adminUsername]);
    $adminExists = $stmt->fetch();

    if (!$adminExists) {
        // Seed default admin user: admin / 123456
        $adminPassword = '123456';
        $hashedPassword = password_hash($adminPassword, PASSWORD_DEFAULT);

        $insertStmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $insertStmt->execute([$adminUsername, $hashedPassword]);

        echo json_encode([
            'status' => 'success',
            'message' => 'Database tables created and default admin seeded successfully.',
            'default_admin' => [
                'username' => $adminUsername,
                'password' => $adminPassword
            ]
        ]);
    } else {
        echo json_encode([
            'status' => 'success',
            'message' => 'Database tables checked. Admin user already exists.'
        ]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Database setup failed: ' . $e->getMessage()
    ]);
}
