import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "electronics",
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort materials.",
    rating: 4.8,
    reviews: 247,
    inStock: true,
    features: ["Active Noise Cancellation", "30-hour battery", "Quick charge", "Premium materials"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    originalPrice: 249,
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "electronics",
    description: "Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, GPS tracking, and smartphone integration.",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    features: ["Heart rate monitor", "GPS tracking", "Water resistant", "Smart notifications"]
  },
  {
    id: 3,
    name: "Designer Leather Backpack",
    price: 159,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "fashion",
    description: "Handcrafted leather backpack perfect for work or travel. Features multiple compartments and premium Italian leather construction.",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ["Genuine leather", "Laptop compartment", "Water resistant", "Lifetime warranty"]
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 89,
    originalPrice: 119,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "home",
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for work or study environments.",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    features: ["LED technology", "Adjustable brightness", "Color temperature control", "Touch controls"]
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 39,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/581338/pexels-photo-581338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "fashion",
    description: "Sustainably made organic cotton t-shirt with a comfortable fit. Available in multiple colors and sizes.",
    rating: 4.4,
    reviews: 312,
    inStock: true,
    features: ["100% organic cotton", "Sustainable production", "Comfortable fit", "Available in multiple colors"]
  },
  {
    id: 6,
    name: "Ceramic Coffee Mug Set",
    price: 49,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "home",
    description: "Handcrafted ceramic coffee mug set. Perfect for your morning coffee or afternoon tea. Set of 4 mugs.",
    rating: 4.6,
    reviews: 145,
    inStock: true,
    features: ["Handcrafted ceramic", "Microwave safe", "Dishwasher safe", "Set of 4"]
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Home & Living' }
];