<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit();
}

$BOT_TOKEN = '8664647948:AAHno8ysvpEATJhU3WnvKpRwY-sShLRJYnY';
$CHAT_ID   = '299676038';

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

function esc(string $val): string {
    return htmlspecialchars($val, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

$name     = esc($input['name']     ?? '-');
$phone    = esc($input['phone']    ?? '-');
$message  = esc($input['message']  ?? '-');
$source   = esc($input['utm_source']   ?? 'no_utm');
$medium   = esc($input['utm_medium']   ?? 'no_utm');
$campaign = esc($input['utm_campaign'] ?? 'no_utm');
$term     = esc($input['utm_term']     ?? 'no_utm');
$content  = esc($input['utm_content']  ?? 'no_utm');
$clientId = esc($input['clientId']     ?? 'no_utm');
$gclid    = esc($input['utmgclid']     ?? 'no_utm');
$page     = esc($input['crm_lead_utm_page'] ?? '-');

$text = "<b>Новий запит</b>\n\n"
    . "👤 Ім'я: {$name}\n"
    . "📞 Телефон: {$phone}\n"
    . "💬 Коментар: {$message}\n"
    . "utm_source: {$source}\n"
    . "utm_medium: {$medium}\n"
    . "utm_campaign: {$campaign}\n"
    . "utm_term: {$term}\n"
    . "utm_content: {$content}\n"
    . "clientId: {$clientId}\n"
    . "utmgclid: {$gclid}\n"
    . "crm_lead_utm_page: {$page}";

$response = file_get_contents("https://api.telegram.org/bot{$BOT_TOKEN}/sendMessage", false, stream_context_create([
    'http' => [
        'method'  => 'POST',
        'header'  => "Content-Type: application/json\r\n",
        'content' => json_encode([
            'chat_id'    => $CHAT_ID,
            'text'       => $text,
            'parse_mode' => 'HTML',
        ]),
    ],
]));

if ($response === false) {
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send message to Telegram']);
    exit();
}

http_response_code(200);
echo json_encode(['ok' => true]);
