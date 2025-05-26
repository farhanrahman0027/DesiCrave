export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  vegetarian: boolean;
  spiceLevel: number; // 1-3 scale
  featured: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'popular',
    name: 'Popular Dishes',
    items: [
      {
        id: 'p1',
        name: 'Butter Chicken',
        description: 'Tender chicken cooked in a rich and creamy tomato-based sauce with butter and aromatic spices.',
        price: 16.99,
        image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: false,
        spiceLevel: 2,
        featured: true
      },
      {
        id: 'p2',
        name: 'Paneer Tikka Masala',
        description: 'Grilled cottage cheese cubes in a spiced creamy tomato sauce, a vegetarian delight.',
        price: 14.99,
        image: 'https://images.pexels.com/photos/5410402/pexels-photo-5410402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 2,
        featured: true
      },
      {
        id: 'p3',
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice cooked with tender chicken pieces, aromatic spices, and herbs.',
        price: 17.99,
        image: 'https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: false,
        spiceLevel: 3,
        featured: true
      }
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      {
        id: 'a1',
        name: 'Vegetable Samosas',
        description: 'Crispy pastry filled with spiced potatoes and peas, served with mint and tamarind chutneys.',
        price: 6.99,
        image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 2,
        featured: true
      },
      {
        id: 'a2',
        name: 'Onion Bhaji',
        description: 'Crispy onion fritters made with chickpea flour and spices, served with chutney.',
        price: 5.99,
        image: 'https://images.pexels.com/photos/4194353/pexels-photo-4194353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 1,
        featured: false
      },
      {
        id: 'a3',
        name: 'Chicken Tikka',
        description: 'Tender pieces of chicken marinated in yogurt and spices, grilled to perfection.',
        price: 8.99,
        image: 'https://images.pexels.com/photos/7353378/pexels-photo-7353378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: false,
        spiceLevel: 2,
        featured: true
      }
    ]
  },
  {
    id: 'mains',
    name: 'Main Courses',
    items: [
      {
        id: 'm1',
        name: 'Lamb Rogan Josh',
        description: 'Tender pieces of lamb cooked with aromatic Kashmiri spices in a rich tomato-based sauce.',
        price: 18.99,
        image: 'https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: false,
        spiceLevel: 3,
        featured: true
      },
      {
        id: 'm2',
        name: 'Vegetable Korma',
        description: 'Mixed vegetables in a creamy sauce made with cashews, coconut, and mild spices.',
        price: 13.99,
        image: 'https://images.pexels.com/photos/5410405/pexels-photo-5410405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 1,
        featured: false
      },
      {
        id: 'm3',
        name: 'Prawn Curry',
        description: 'Succulent prawns cooked in a tangy coconut curry with ginger and curry leaves.',
        price: 19.99,
        image: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: false,
        spiceLevel: 3,
        featured: true
      }
    ]
  },
  {
    id: 'breads',
    name: 'Breads & Rice',
    items: [
      {
        id: 'b1',
        name: 'Garlic Naan',
        description: 'Soft leavened bread topped with garlic and butter, baked in a tandoor oven.',
        price: 3.99,
        image: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 1,
        featured: true
      },
      {
        id: 'b2',
        name: 'Pulao Rice',
        description: 'Fragrant basmati rice cooked with whole spices and herbs.',
        price: 4.99,
        image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 1,
        featured: false
      },
      {
        id: 'b3',
        name: 'Cheese Chilli Naan',
        description: 'Naan bread stuffed with cheese and green chilies, baked in a tandoor oven.',
        price: 4.99,
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 2,
        featured: false
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        id: 'd1',
        name: 'Gulab Jamun',
        description: 'Sweet milk solids dumplings soaked in rose-flavored sugar syrup, served warm.',
        price: 5.99,
        image: 'https://images.pexels.com/photos/7586028/pexels-photo-7586028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 0,
        featured: true
      },
      {
        id: 'd2',
        name: 'Mango Lassi',
        description: 'Refreshing yogurt drink blended with sweet mango pulp and a hint of cardamom.',
        price: 4.99,
        image: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 0,
        featured: true
      },
      {
        id: 'd3',
        name: 'Kulfi',
        description: 'Traditional Indian ice cream made with condensed milk, flavored with pistachios and cardamom.',
        price: 6.99,
        image: 'https://images.pexels.com/photos/14765556/pexels-photo-14765556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        vegetarian: true,
        spiceLevel: 0,
        featured: false
      }
    ]
  }
];