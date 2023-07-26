require('dotenv').config();

const fetch = require('node-fetch');

const Router = require('express');

const telegram = new Router();

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.RECIPIENT_CHAT_ID;

telegram.post('/api/send-notification', async (request, response) => {
  try {
    const { message, email } = request.body;
    const title = `Привет! Это уведомление из моего Express приложения. ${message}. ${email}`;

    const responseTelegram = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: title,
      }),
    });

    const responseData = await responseTelegram.json();

    if (responseData.ok) {
      response.json({ message: 'Пользователь успешно получил сообщение' });
    } else {
      response.status(400).json({ message: 'Ошибка при отправке уведомления в Telegram' });
    }
  } catch (error) {
    console.error('Ошибка: ', error);
    response.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = telegram;
