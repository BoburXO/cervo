const TELEGRAM_TOKEN = '7600844890:AAFJfMsPMzYXH34Dn3WvJpnaGBDYMeg_gzw';
const CHAT_ID = '-4899158274';
const API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

export const sendTelegramMessage = async (message) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();
        if (!data.ok) {
            console.error('Ошибка при отправке сообщения в Telegram:', data.description);
        }

        return data;
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
    }
};
