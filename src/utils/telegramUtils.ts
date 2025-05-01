
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
 * @param botToken Your Telegram bot token (you'll need to replace this with your actual token)
 * @param chatId The chat ID where messages should be sent (you'll need to replace this)
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
👤 Имя: ${bookingData.name}
📱 Телефон: ${bookingData.phone}
📧 Email: ${bookingData.email}
🏖️ Тур: ${bookingData.tourTitle} (ID: ${bookingData.tourId})
${bookingData.message ? `💬 Сообщение: ${bookingData.message}` : ''}
⏰ Дата заявки: ${new Date().toLocaleString('ru-RU')}
`;

    const response = await fetch(telegramWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: message,
        booking_data: bookingData
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
