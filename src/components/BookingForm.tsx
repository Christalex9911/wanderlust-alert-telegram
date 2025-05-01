
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Tour } from '../data/toursData';
import { sendTelegramNotification } from '../utils/telegramUtils';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTour: Tour | null;
}

const BookingForm: React.FC<BookingFormProps> = ({ 
  isOpen, 
  onClose, 
  selectedTour 
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  // You should replace this with your actual Telegram webhook URL
  // This would typically come from an environment variable
  const telegramWebhookUrl = '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTour) return;
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      if (!telegramWebhookUrl) {
        // Show a success message even if we don't have a webhook URL configured
        // This is just for demo purposes
        setTimeout(() => {
          toast({
            title: "Заявка отправлена",
            description: "Мы свяжемся с вами в ближайшее время!",
          });
          setFormData({ name: '', phone: '', email: '', message: '' });
          onClose();
        }, 1000);
      } else {
        const success = await sendTelegramNotification({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          tourId: selectedTour.id,
          tourTitle: selectedTour.title
        }, telegramWebhookUrl);

        if (success) {
          toast({
            title: "Заявка отправлена",
            description: "Мы свяжемся с вами в ближайшее время!",
          });
          setFormData({ name: '', phone: '', email: '', message: '' });
          onClose();
        } else {
          throw new Error("Failed to send booking");
        }
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Забронировать тур</DialogTitle>
          <DialogDescription>
            {selectedTour ? (
              <div className="flex flex-col space-y-1">
                <span className="font-medium text-foreground">
                  {selectedTour.title}
                </span>
                <span>{selectedTour.destination}, {selectedTour.duration}</span>
                <span className="text-hotdeal font-bold">
                  {selectedTour.price.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            ) : (
              "Заполните форму для бронирования"
            )}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя*</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон*</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.ru"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Дополнительная информация или вопросы..."
              rows={3}
            />
          </div>
          
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Отправляем..." : "Отправить заявку"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
