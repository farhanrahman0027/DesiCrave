export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York',
    rating: 5,
    text: 'The best Indian food I\'ve ever had outside of India! The butter chicken was creamy and flavorful, and the naan bread was perfectly baked. The service was exceptional, and the ambiance transported me straight to Delhi. Will definitely be coming back!',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco',
    rating: 5,
    text: 'Authentic flavors that reminded me of my travels through India. The spice levels were perfect - flavorful without being overwhelming. The staff was knowledgeable and helped me choose dishes that suited my taste. A hidden gem in the city!',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Chicago',
    rating: 4,
    text: 'Such a cozy spot with delicious food! I loved the vegetarian options - the paneer tikka masala was incredible. Great atmosphere for both date night and family dinners. The only reason for 4 stars instead of 5 is that it gets quite busy on weekends.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'James Wilson',
    location: 'Boston',
    rating: 5,
    text: 'I\'ve been to many Indian restaurants, but Indian Cafe stands out. Their lamb rogan josh is absolutely divine - tender meat in a rich, aromatic sauce. The owner came to our table to check on us, which was a nice personal touch. Worth every penny!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];