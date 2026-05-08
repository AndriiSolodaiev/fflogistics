function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

exports.handler = async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Telegram environment variables are not configured" }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Invalid JSON payload" }),
    };
  }

  const messageLines = [
    "<b>Новий запит</b>",
    "",
    `👤 Ім'я: ${escapeHtml(payload.name || "-")}`,
    `📞 Телефон: ${escapeHtml(payload.phone || "-")}`,
    `💬 Коментар: ${escapeHtml(payload.message || "-")}`,
    `utm_source: ${escapeHtml(payload.utm_source || "no_utm")}`,
    `utm_medium: ${escapeHtml(payload.utm_medium || "no_utm")}`,
    `utm_campaign: ${escapeHtml(payload.utm_campaign || "no_utm")}`,
    `utm_term: ${escapeHtml(payload.utm_term || "no_utm")}`,
    `utm_content: ${escapeHtml(payload.utm_content || "no_utm")}`,
    `clientId: ${escapeHtml(payload.clientId || "no_utm")}`,
    `utmgclid: ${escapeHtml(payload.utmgclid || "no_utm")}`,
    `crm_lead_utm_page: ${escapeHtml(payload.crm_lead_utm_page || "-")}`,
  ];

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageLines.join("\n"),
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      return {
        statusCode: 502,
        headers: corsHeaders,
        body: JSON.stringify({ error: "Telegram API error", details: errorText }),
      };
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Failed to send message to Telegram" }),
    };
  }
};
