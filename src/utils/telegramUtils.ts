
interface BookingData {
  name: string;
  phone: string;
  email: string;
  tourId: number;
  tourTitle: string;
  message?: string;
}

/**
 * Sends booking data to a Telegram bot
 * @param bookingData The booking information to send
 * @param telegramWebhookUrl Your Telegram webhook URL (you'll need to provide this)
 */
export const sendTelegramNotification = async (
  bookingData: BookingData,
  telegramWebhookUrl: string
): Promise<boolean> => {
  try {
    if (!telegramWebhookUrl) {
      console.error("Telegram webhook URL is not configured");
      return false;
    }

    const message = `
🔥 НОВАЯ ЗАЯВКА НА ТУР! 🔥

👤 *Информация о клиенте:*
- Имя: ${bookingData.name}
- Телефон: ${bookingData.phone}
- Email: ${bookingData.email}

🏖️ *Информация о туре:*
- Название: ${bookingData.tourTitle} 
- ID тура: ${bookingData.tourId}
${bookingData.message ? `\n💬 *Сообщение клиента:*\n${bookingData.message}` : ''}

⏰ Дата заявки: ${new Date().toLocaleString('ru-RU')}
`;

    const response = await fetch(telegramWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: message,
        booking_data: bookingData,
        parse_mode: "Markdown"
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send notification: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    return false;
  }
};
