
export type Package = {
  name: string;
  slug: string;
  duration: string;
  price: number;
  description: string;
  imageHint: string;
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  galleryImages: string[];
};

export const packages: Package[] = [
  {
    name: 'Full Ziyarat Package (Karbala | Najaf | Misr)',
    slug: 'full-ziyarat',
    duration: '12 Nights / 13 Days',
    price: 110000,
    description: 'An all-encompassing spiritual journey to the holy sites of Iraq and Egypt. Immerse yourself in history and faith.',
    imageHint: 'karbala shrine',
    itinerary: [
      { day: '1-4', title: 'Arrival in Najaf & Ziyarat', description: 'Arrive in Najaf, check into your hotel. Perform Ziyarat of Imam Ali (AS) and explore the holy city.' },
      { day: '5-8', title: 'Journey to Karbala', description: 'Travel to Karbala. Perform Ziyarat of Imam Hussain (AS) and Hazrat Abbas (AS). Participate in evening prayers.' },
      { day: '9-10', title: 'Travel to Mishr (Egypt)', description: 'Fly to Cairo, Egypt. Settle in and prepare for the Ziyarat of historical Islamic sites.' },
      { day: '11-12', title: 'Ziyarat in Cairo', description: 'Visit Al-Azhar Mosque, Imam Hussein Mosque, and other significant locations. Explore the ancient city.' },
      { day: '13', title: 'Departure', description: 'Enjoy a final breakfast before your departure from Cairo.' },
    ],
    inclusions: ['Visa & Travel Insurance', 'Hotel Accommodation with Meals', 'Guided Ziyarat Tours', 'Comfortable Transfers', 'Experienced Tour Manager'],
    galleryImages: [
      'https://i.ibb.co/jks1NN1b/image.png',
      'https://i.ibb.co/gbVBVqgd/image.png',
      'https://www.zaereen.com/gifs/photo.jpg',
    ],
  },
  {
    name: 'KUN SAFAR (Karbala & Najaf)',
    slug: 'karbala-najaf',
    duration: '9 or 10 Nights',
    price: 80000,
    description: 'A focused pilgrimage to the holy cities of Karbala and Najaf, the resting places of the masters of the youth of paradise.',
    imageHint: 'najaf mosque',
    itinerary: [
      { day: '1-4', title: 'Arrival in Najaf & Ziyarat', description: 'Arrive in Najaf, check into your hotel. Perform Ziyarat of Imam Ali (AS) and explore the holy city.' },
      { day: '5-9/10', title: 'Journey to Karbala & Ziyarat', description: 'Travel to Karbala. Perform Ziyarat of Imam Hussain (AS) and Hazrat Abbas (AS). Explore local markets and sites.' },
      { day: '10/11', title: 'Departure', description: 'Enjoy a final breakfast before your departure from Najaf.' },
    ],
    inclusions: ['Visa & Travel Insurance', 'Hotel Accommodation with Meals', 'Guided Ziyarat Tours', 'Comfortable Transfers', 'Experienced Tour Manager'],
    galleryImages: [
      'https://i.ibb.co/gbVBVqgd/image.png',
      'https://i.ibb.co/jks1NN1b/image.png',
      'https://mgtourstravels.com/wp-content/uploads/2022/11/Karbala01.webp',
    ],
  },
  {
    name: 'Only Misr Ziyarat Package',
    slug: 'mishr-only',
    duration: '3 Nights / 4 Days',
    price: 55000,
    description: 'A short but profound trip to explore the rich Islamic heritage and historical wonders of Mishr (Egypt).',
    imageHint: 'cairo pyramids',
    itinerary: [
      { day: '1', title: 'Arrival in Cairo', description: 'Arrive in Cairo and transfer to your hotel. Evening at leisure.' },
      { day: '2', title: 'Ziyarat and Sightseeing', description: 'Visit Al-Azhar Mosque, Imam Hussein Mosque, and the Pyramids of Giza.' },
      { day: '3', title: 'Explore Old Cairo', description: 'Discover the historical sites of Old Cairo and the famous Khan el-Khalili bazaar.' },
      { day: '4', title: 'Departure', description: 'Enjoy a final breakfast before your departure from Cairo.' },
    ],
    inclusions: ['Visa & Travel Insurance', 'Hotel Accommodation with Meals', 'Guided Ziyarat Tours', 'Comfortable Transfers', 'Experienced Tour Manager'],
    galleryImages: [
      'https://www.zaereen.com/gifs/photo.jpg',
      'https://i.ibb.co/gbVBVqgd/image.png',
      'https://i.ibb.co/jks1NN1b/image.png',
    ],
  },
];

export const testimonials = [
  { id: 1, name: 'Fatima Ahmed', location: 'Mumbai', avatar: 'https://placehold.co/100x100', quote: 'The Full Ziyarat package was a life-changing experience. Hakimi Travels handled everything perfectly, allowing us to focus on our spiritual journey.' },
  { id: 2, name: 'Ali Raza', location: 'Ahmedabad', avatar: 'https://placehold.co/100x100', quote: 'Professional, caring, and incredibly well-organized. The guides were knowledgeable and the accommodation was excellent. Highly recommended.' },
  { id: 3, name: 'Zainab Jaffer', location: 'Surat', avatar: 'https://placehold.co/100x100', quote: 'Our trip to Karbala and Najaf was seamless. Thank you, Hakimi Travels, for your impeccable service and attention to detail.' },
  { id: 4, name: 'Hassan Merchant', location: 'Pune', avatar: 'https://placehold.co/100x100', quote: 'The Mishr tour was fantastic. It was a perfect blend of spiritual visits and historical exploration. Well done!' },
];

export type Car = {
  id: number;
  name: string;
  type: 'Sedan' | 'SUV' | 'Van' | 'Bus';
  capacity: number;
  rates: {
    ac: {
      perDay: number;
      perKm: number;
    };
    nonAc: {
      perDay: number;
      perKm: number;
    };
  };
  image: string;
  imageHint: string;
};


export const carFleet: Car[] = [
    { id: 1, name: 'Dezire', type: 'Sedan', capacity: 4, rates: { ac: { perDay: 2800, perKm: 11 }, nonAc: { perDay: 2500, perKm: 10 } }, image: 'https://placehold.co/600x400.png', imageHint: 'white sedan' },
    { id: 2, name: 'Aura', type: 'Sedan', capacity: 4, rates: { ac: { perDay: 2800, perKm: 11 }, nonAc: { perDay: 2500, perKm: 10 } }, image: 'https://placehold.co/600x400.png', imageHint: 'silver sedan' },
    { id: 3, name: 'Baleno', type: 'Sedan', capacity: 4, rates: { ac: { perDay: 2800, perKm: 11 }, nonAc: { perDay: 2500, perKm: 10 } }, image: 'https://placehold.co/600x400.png', imageHint: 'blue sedan' },
    { id: 4, name: 'Ertiga', type: 'SUV', capacity: 7, rates: { ac: { perDay: 3300, perKm: 13 }, nonAc: { perDay: 3000, perKm: 12 } }, image: 'https://placehold.co/600x400.png', imageHint: 'red suv' },
    { id: 5, name: 'Innova Crysta', type: 'SUV', capacity: 7, rates: { ac: { perDay: 4300, perKm: 17 }, nonAc: { perDay: 4000, perKm: 16 } }, image: 'https://placehold.co/600x400.png', imageHint: 'black suv' },
    { id: 6, name: 'Kia Carens', type: 'SUV', capacity: 7, rates: { ac: { perDay: 3800, perKm: 15 }, nonAc: { perDay: 3500, perKm: 14 } }, image: 'https://placehold.co/600x400.png', imageHint: 'grey suv' },
    { id: 7, name: 'Fortuner', type: 'SUV', capacity: 7, rates: { ac: { perDay: 12500, perKm: 50 }, nonAc: { perDay: 11300, perKm: 45 } }, image: 'https://placehold.co/600x400.png', imageHint: 'white suv luxury' },
    { id: 8, name: 'Urbania', type: 'Van', capacity: 17, rates: { ac: { perDay: 8800, perKm: 35 }, nonAc: { perDay: 7500, perKm: 30 } }, image: 'https://placehold.co/600x400.png', imageHint: 'white van' },
    { id: 9, name: 'Tempo Traveller (17 Seater)', type: 'Van', capacity: 17, rates: { ac: { perDay: 6000, perKm: 24 }, nonAc: { perDay: 5500, perKm: 22 } }, image: 'https://placehold.co/600x400.png', imageHint: 'white tempo traveller' },
    { id: 10, name: 'Tempo Traveller (20 Seater)', type: 'Van', capacity: 20, rates: { ac: { perDay: 7000, perKm: 28 }, nonAc: { perDay: 6000, perKm: 24 } }, image: 'https://placehold.co/600x400.png', imageHint: 'large tempo traveller' },
    { id: 11, name: 'Tempo Traveller (26 Seater)', type: 'Van', capacity: 26, rates: { ac: { perDay: 8500, perKm: 34 }, nonAc: { perDay: 7500, perKm: 30 } }, image: 'https://placehold.co/600x400.png', imageHint: 'very large van' },
    { id: 12, name: 'Mini Bus (35 Seater)', type: 'Bus', capacity: 35, rates: { ac: { perDay: 11300, perKm: 45 }, nonAc: { perDay: 10000, perKm: 40 } }, image: 'https://placehold.co/600x400.png', imageHint: 'mini bus' },
    { id: 13, name: 'Bus (52 Seater)', type: 'Bus', capacity: 52, rates: { ac: { perDay: 15000, perKm: 60 }, nonAc: { perDay: 13800, perKm: 55 } }, image: 'https://placehold.co/600x400.png', imageHint: 'coach bus' },
];
