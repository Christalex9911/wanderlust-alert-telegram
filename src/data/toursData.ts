
export interface Tour {
  id: number;
  title: string;
  destination: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  duration: string;
  departureDate: string;
  availablePlaces: number;
  totalPlaces: number;
  features: string[];
  isHot: boolean;
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "Горящий тур в Турцию",
    destination: "Анталия, Турция",
    description: "Великолепный отдых на берегу Средиземного моря в 5-звездочном отеле с системой «всё включено». Песчаный пляж, бассейны и развлечения.",
    price: 45000,
    oldPrice: 65000,
    imageUrl: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=2070",
    duration: "7 ночей",
    departureDate: "28 мая 2023",
    availablePlaces: 3,
    totalPlaces: 20,
    features: ["Всё включено", "Трансфер", "Страховка", "5* отель"],
    isHot: true
  },
  {
    id: 2,
    title: "Отдых в Египте",
    destination: "Шарм-эль-Шейх, Египет",
    description: "Захватывающий отдых на Красном море с возможностью заняться дайвингом и увидеть красивейший подводный мир.",
    price: 52000,
    oldPrice: 70000,
    imageUrl: "https://images.unsplash.com/photo-1553117595-d60ebcd5c8f2?q=80&w=2070",
    duration: "10 ночей",
    departureDate: "5 июня 2023",
    availablePlaces: 5,
    totalPlaces: 25,
    features: ["Всё включено", "Трансфер", "Страховка", "4* отель"],
    isHot: true
  },
  {
    id: 3,
    title: "Путешествие в Грецию",
    destination: "Крит, Греция",
    description: "Уютный отдых на острове Крит. Вас ждут великолепные пляжи и древние достопримечательности.",
    price: 60000,
    oldPrice: 75000,
    imageUrl: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070",
    duration: "7 ночей",
    departureDate: "15 июня 2023",
    availablePlaces: 2,
    totalPlaces: 15,
    features: ["Завтраки и ужины", "Трансфер", "Страховка", "4* отель"],
    isHot: true
  },
  {
    id: 4,
    title: "Экскурсионный тур в Италию",
    destination: "Рим - Флоренция - Венеция",
    description: "Увлекательное путешествие по историческим городам Италии. Посетите Колизей, музеи Ватикана и совершите романтическую прогулку на гондоле.",
    price: 78000,
    oldPrice: 95000,
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996",
    duration: "8 ночей",
    departureDate: "20 июня 2023",
    availablePlaces: 4,
    totalPlaces: 20,
    features: ["Завтраки", "Экскурсии", "Перелет", "3* отель"],
    isHot: true
  },
  {
    id: 5,
    title: "Отдых на Мальдивах",
    destination: "Мальдивские острова",
    description: "Роскошный отдых на белоснежных пляжах Мальдивских островов. Бунгало над водой, коралловые рифы и экзотическая природа.",
    price: 150000,
    oldPrice: 180000,
    imageUrl: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974",
    duration: "7 ночей",
    departureDate: "10 июля 2023",
    availablePlaces: 1,
    totalPlaces: 10,
    features: ["Полупансион", "Трансфер", "Страховка", "5* отель"],
    isHot: true
  },
  {
    id: 6,
    title: "Городской тур в Барселону",
    destination: "Барселона, Испания",
    description: "Знакомство с архитектурой Гауди и культурой Каталонии. Наслаждайтесь пляжами, тапас и знаменитыми достопримечательностями.",
    price: 65000,
    oldPrice: 85000,
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070",
    duration: "5 ночей",
    departureDate: "25 июля 2023",
    availablePlaces: 6,
    totalPlaces: 15,
    features: ["Завтраки", "Экскурсия", "Страховка", "4* отель"],
    isHot: true
  }
];
