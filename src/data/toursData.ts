
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
  returnDate: string;
  availablePlaces: number;
  totalPlaces: number;
  features: string[];
  isHot: boolean;
  popularity: "Высокая" | "Сверхпопулярность" | "Средняя" | "Низкая";
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "Горящий тур во Вьетнам",
    destination: "Нячанг, Вьетнам",
    description: "Экзотический отдых во Вьетнаме. Белоснежные пляжи, вкуснейшая кухня и богатая культура ждут вас. Отличный отель с системой питания 'всё включено'.",
    price: 75000,
    oldPrice: 95000,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070",
    duration: "10 ночей",
    departureDate: "15 июня 2023",
    returnDate: "25 июня 2023",
    availablePlaces: 5,
    totalPlaces: 700,
    features: ["Всё включено", "Трансфер", "Страховка", "4* отель"],
    isHot: true,
    popularity: "Сверхпопулярность"
  },
  {
    id: 2,
    title: "Горящий тур в ОАЭ",
    destination: "Дубай, ОАЭ",
    description: "Роскошный отдых в Дубае. Ультрасовременные небоскребы, шикарные торговые центры и лучшие песчаные пляжи в окружении пальм.",
    price: 89000,
    oldPrice: 120000,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    duration: "7 ночей",
    departureDate: "10 июня 2023",
    returnDate: "17 июня 2023",
    availablePlaces: 8,
    totalPlaces: 950,
    features: ["Завтраки", "Трансфер", "Страховка", "5* отель"],
    isHot: true,
    popularity: "Сверхпопулярность"
  },
  {
    id: 3,
    title: "Горящий тур в Египет",
    destination: "Хургада, Египет",
    description: "Захватывающий отдых на Красном море с возможностью заняться дайвингом и увидеть красивейший подводный мир. Всё включено в шикарном отеле.",
    price: 52000,
    oldPrice: 70000,
    imageUrl: "https://images.unsplash.com/photo-1539768942693-daf3e2940a81?q=80&w=2071",
    duration: "10 ночей",
    departureDate: "5 июня 2023",
    returnDate: "15 июня 2023",
    availablePlaces: 12,
    totalPlaces: 800,
    features: ["Всё включено", "Трансфер", "Страховка", "4* отель"],
    isHot: true,
    popularity: "Сверхпопулярность"
  },
  {
    id: 4,
    title: "Горящий тур в Турцию",
    destination: "Анталия, Турция",
    description: "Великолепный отдых на берегу Средиземного моря в 5-звездочном отеле с системой «всё включено». Песчаный пляж, бассейны и развлечения.",
    price: 45000,
    oldPrice: 65000,
    imageUrl: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=2070",
    duration: "7 ночей",
    departureDate: "28 мая 2023",
    returnDate: "4 июня 2023",
    availablePlaces: 3,
    totalPlaces: 1000,
    features: ["Всё включено", "Трансфер", "Страховка", "5* отель"],
    isHot: true,
    popularity: "Сверхпопулярность"
  },
  {
    id: 5,
    title: "Путешествие в Грецию",
    destination: "Крит, Греция",
    description: "Уютный отдых на острове Крит. Вас ждут великолепные пляжи и древние достопримечательности.",
    price: 60000,
    oldPrice: 75000,
    imageUrl: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070",
    duration: "7 ночей",
    departureDate: "15 июня 2023",
    returnDate: "22 июня 2023",
    availablePlaces: 20,
    totalPlaces: 700,
    features: ["Завтраки и ужины", "Трансфер", "Страховка", "4* отель"],
    isHot: true,
    popularity: "Средняя"
  },
  {
    id: 6,
    title: "Экскурсионный тур в Италию",
    destination: "Рим - Флоренция - Венеция",
    description: "Увлекательное путешествие по историческим городам Италии. Посетите Колизей, музеи Ватикана и совершите романтическую прогулку на гондоле.",
    price: 78000,
    oldPrice: 95000,
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996",
    duration: "8 ночей",
    departureDate: "20 июня 2023",
    returnDate: "28 июня 2023",
    availablePlaces: 25,
    totalPlaces: 800,
    features: ["Завтраки", "Экскурсии", "Перелет", "3* отель"],
    isHot: false,
    popularity: "Средняя"
  }
];

