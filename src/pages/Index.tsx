
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tours, Tour } from "../data/toursData";
import TourCard from "../components/TourCard";
import BookingForm from "../components/BookingForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Search } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Фильтрация туров
  useEffect(() => {
    let filtered = [...tours];

    // Фильтр по дате
    if (selectedDate) {
      const selectedDateString = format(selectedDate, 'dd.MM.yyyy');
      filtered = filtered.filter(tour => {
        // Преобразуем строки даты в объекты Date для сравнения
        const departureParts = tour.departureDate.split(' ');
        const departureDay = parseInt(departureParts[0]);
        const departureMonth = getMonthNumber(departureParts[1]);
        const departureYear = parseInt(departureParts[2]);
        
        const departureDate = new Date(departureYear, departureMonth, departureDay);
        const selectedMonth = selectedDate.getMonth();
        const selectedYear = selectedDate.getFullYear();
        
        // Проверяем, совпадает ли месяц и год
        return departureDate.getMonth() === selectedMonth && 
               departureDate.getFullYear() === selectedYear;
      });
    }

    // Фильтр по поисковому запросу
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        tour => 
          tour.title.toLowerCase().includes(query) || 
          tour.destination.toLowerCase().includes(query)
      );
    }

    setFilteredTours(filtered);
  }, [selectedDate, searchQuery]);

  // Функция для конвертации названия месяца в его номер
  const getMonthNumber = (month: string): number => {
    const months: { [key: string]: number } = {
      'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5,
      'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
    };
    return months[month];
  };

  const handleBookNow = (tourId: number) => {
    const tour = tours.find(t => t.id === tourId);
    if (tour) {
      setSelectedTour(tour);
      setIsBookingFormOpen(true);
    } else {
      toast({
        title: "Ошибка",
        description: "Тур не найден.",
        variant: "destructive",
      });
    }
  };

  const clearFilters = () => {
    setSelectedDate(undefined);
    setSearchQuery("");
    setFilteredTours(tours);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070')`,
          filter: 'brightness(0.6)'
        }} />
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl sm:text-5xl font-bold">
              Горящие туры со скидкой до 50%
            </h1>
            <p className="mb-6 text-lg opacity-90">
              Ограниченное количество мест на эксклюзивные предложения. 
              Успейте забронировать идеальный отдых по невероятной цене!
            </p>
            <Button 
              size="lg"
              className="bg-hotdeal hover:bg-hotdeal-hover text-white"
              asChild
            >
              <a href="#tours">Смотреть все предложения</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tours Section */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Горящие туры</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы собрали лучшие предложения от проверенных туроператоров. 
              Количество мест ограничено!
            </p>
          </div>
          
          {/* Фильтры поиска */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Поиск по направлению</label>
                <div className="flex">
                  <Input
                    placeholder="Введите страну или город..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                  <Button variant="ghost" className="ml-2">
                    <Search size={20} />
                  </Button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Выберите месяц</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant={"outline"} 
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? (
                        format(selectedDate, 'LLLL yyyy', { locale: ru })
                      ) : (
                        <span>Выберите месяц</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      locale={ru}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={clearFilters} 
                  variant="outline" 
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </div>
          
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <TourCard 
                  key={tour.id}
                  tour={tour}
                  onBookNow={handleBookNow}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Туры не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска или выбрать другую дату.
              </p>
              <Button 
                onClick={clearFilters} 
                variant="default" 
                className="mt-4 bg-hotdeal hover:bg-hotdeal-hover"
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О нашей компании</h2>
              <p className="mb-4">
                TravelHot – это агрегатор горящих туров, который помогает вам экономить до 50% на путешествиях. 
                Мы сотрудничаем с надежными туроператорами и предлагаем только проверенные варианты отдыха.
              </p>
              <p className="mb-6">
                Наша миссия – сделать путешествия доступными для всех. 
                Мы ежедневно обновляем базу горящих туров и следим за качеством предложений.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-travel-light p-4 rounded-lg">
                  <div className="font-bold text-2xl text-travel-dark mb-2">10+</div>
                  <div className="text-sm">Лет на рынке туризма</div>
                </div>
                <div className="bg-travel-light p-4 rounded-lg">
                  <div className="font-bold text-2xl text-travel-dark mb-2">50 000+</div>
                  <div className="text-sm">Довольных клиентов</div>
                </div>
                <div className="bg-travel-light p-4 rounded-lg">
                  <div className="font-bold text-2xl text-travel-dark mb-2">30+</div>
                  <div className="text-sm">Стран для путешествий</div>
                </div>
                <div className="bg-travel-light p-4 rounded-lg">
                  <div className="font-bold text-2xl text-travel-dark mb-2">24/7</div>
                  <div className="text-sm">Поддержка клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div 
                className="absolute top-0 right-0 w-4/5 h-4/5 bg-cover bg-center rounded-lg shadow-xl z-10"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071')` }}
              />
              <div 
                className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-cover bg-center rounded-lg shadow-xl"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073')` }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-hotdeal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не упустите свой шанс на идеальный отдых
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Количество мест на горящие туры ограничено. 
            Успейте забронировать по выгодной цене!
          </p>
          <Button 
            size="lg"
            className="bg-white text-hotdeal hover:bg-gray-100"
            asChild
          >
            <a href="#tours">Найти свой тур</a>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Booking Form Dialog */}
      <BookingForm 
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
        selectedTour={selectedTour}
      />
    </div>
  );
};

export default Index;
