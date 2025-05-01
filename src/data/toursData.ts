
export interface Tour {
  id: number;
  title: string;
  destination: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  images: string[];  // Adding an array of images
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
    price: 98000,
    oldPrice: 125000,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070",
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2811",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2940",
      "https://images.unsplash.com/photo-1540958576178-11e1abbef05f?q=80&w=3071"
    ],
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
    price: 129000,
    oldPrice: 159000,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2874",
      "https://images.unsplash.com/photo-1580674684089-c31e2bfe96c0?q=80&w=2874",
      "https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2940"
    ],
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
    price: 92000,
    oldPrice: 120000,
    imageUrl: "https://images.unsplash.com/photo-1539768942693-daf3e2940a81?q=80&w=2071",
    images: [
      "https://images.unsplash.com/photo-1539768942693-daf3e2940a81?q=80&w=2071",
      "https://images.unsplash.com/photo-1564752297978-3eba9c8c9142?q=80&w=2831",
      "https://images.unsplash.com/photo-1576153762275-12a7bf48230a?q=80&w=2871",
      "https://images.unsplash.com/photo-1539650116574-8686b1d4ff55?q=80&w=2942"
    ],
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
    price: 90000,
    oldPrice: 110000,
    imageUrl: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=2070",
      "https://images.unsplash.com/photo-1604153044494-6408b1942362?q=80&w=2942",
      "https://images.unsplash.com/photo-1613071424195-73ec561329d9?q=80&w=2831",
      "https://images.unsplash.com/photo-1649962496885-2a184f00da31?q=80&w=2944"
    ],
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
    price: 95000,
    oldPrice: 115000,
    imageUrl: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070",
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?q=80&w=2830",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2874",
      "https://images.unsplash.com/photo-1510610240853-7230d499a2d4?q=80&w=2881"
    ],
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
    price: 108000,
    oldPrice: 135000,
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996",
    images: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996",
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=2936",
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?q=80&w=2836",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2786"
    ],
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
