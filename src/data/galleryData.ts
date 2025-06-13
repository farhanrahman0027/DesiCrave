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
    src: 'https://amritsruae.com/blog/wp-content/uploads/2022/01/paneer-tikka-masala-800x510.jpg',
    alt: 'Paneer Tikka Masala',
    category: 'food'
  },
  {
    id: 3,
    src: 'https://interiordesign.net/wp-content/uploads/2024/04/InteriorDesign_March2024_Brave-New-World-11-1024x768.jpg',
    alt: 'Interior of the restaurant',
    category: 'restaurant'
  },
  {
    id: 4,
    src: 'https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg',
    alt: 'Chicken Biryani',
    category: 'food'
  },
  {
    id: 5,
    src: 'https://www.gotable.com/blog/wp-content/uploads/Casual-table-setting.jpg',
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
    src: 'https://img.freepik.com/free-photo/young-happy-woman-talking-her-friend-while-bringing-food-lunch-dining-table_637285-3148.jpg?semt=ais_items_boosted&w=740',
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
    src: 'https://www.cookclickndevour.com/wp-content/uploads/2016/05/mango-lassi-recipe-c.jpg',
    alt: 'Mango Lassi drink',
    category: 'food'
  },
  {
    id: 12,
    src: 'https://www.dawnvale.com/wp-content/uploads/news/1217/designing-private-dining-area.jpg',
    alt: 'Private dining area',
    category: 'restaurant'
  }
];