
import React from 'react';
import { Tour } from '../data/toursData';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

interface TourCardProps {
  tour: Tour;
  onBookNow: (tourId: number) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBookNow }) => {
  const availabilityPercentage = (tour.availablePlaces / tour.totalPlaces) * 100;
  const isLowAvailability = availabilityPercentage <= 15;
  
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${tour.imageUrl})` }}
        />
        
        {tour.isHot && (
          <div className="absolute top-2 left-2">
            <span className="hot-badge animate-pulse-red">Горящий тур</span>
          </div>
        )}
        
        <div className="absolute bottom-2 right-2">
          <div className={`places-badge ${isLowAvailability ? 'bg-hotdeal' : 'bg-travel-dark'}`}>
            <Users size={14} />
            {isLowAvailability ? (
              <span className={`${isLowAvailability ? 'animate-bounce-subtle' : ''}`}>
                Осталось {tour.availablePlaces} мест
              </span>
            ) : (
              <span>Мест: {tour.availablePlaces} из {tour.totalPlaces}</span>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-xl">{tour.title}</h3>
            <p className="text-muted-foreground text-sm">{tour.destination}</p>
          </div>
          <div className="text-right">
            {tour.oldPrice && (
              <p className="text-muted-foreground line-through text-sm">
                {tour.oldPrice.toLocaleString('ru-RU')} ₽
              </p>
            )}
            <p className="font-bold text-hotdeal text-xl">
              {tour.price.toLocaleString('ru-RU')} ₽
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-grow">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Длительность:</span>
            <span className="font-medium">{tour.duration}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Вылет:</span>
            <span className="font-medium">{tour.departureDate}</span>
          </div>
          <p className="mt-3 text-sm line-clamp-3">{tour.description}</p>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {tour.features.map((feature, index) => (
            <span 
              key={index} 
              className="text-xs bg-travel-light text-travel-dark rounded-full px-2 py-0.5"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onBookNow(tour.id)} 
          className="w-full bg-hotdeal hover:bg-hotdeal-hover"
        >
          Забронировать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
