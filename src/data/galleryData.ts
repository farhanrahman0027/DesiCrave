export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'restaurant' | 'people';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Butter Chicken with naan bread',
    category: 'food'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/5410402/pexels-photo-5410402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Paneer Tikka Masala',
    category: 'food'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Interior of the restaurant',
    category: 'restaurant'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Chicken Biryani',
    category: 'food'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Restaurant tables setup',
    category: 'restaurant'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Chef preparing food',
    category: 'people'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Vegetable Samosas',
    category: 'food'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Restaurant bar area',
    category: 'restaurant'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Customers enjoying dinner',
    category: 'people'
  },
  {
    id: 10,
    src: 'https://www.mygingergarlickitchen.com/wp-content/uploads/2017/09/gulab-jamun-recipe-3.jpg',
    alt: 'Gulab Jamun dessert',
    category: 'food'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Mango Lassi drink',
    category: 'food'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Private dining area',
    category: 'restaurant'
  }
];