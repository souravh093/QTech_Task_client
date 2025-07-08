export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
}

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    rating: 4.8,
    reviews: 2847,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    description:
      "Advanced fitness tracking with heart rate monitor, GPS, and water resistance.",
    category: "Wearables",
    rating: 4.6,
    reviews: 1293,
  },
  {
    id: "3",
    name: "Minimalist Desk Lamp",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    description:
      "Modern LED desk lamp with adjustable brightness and USB charging port.",
    category: "Home & Office",
    rating: 4.7,
    reviews: 856,
  },
  {
    id: "4",
    name: "Organic Coffee Beans",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&crop=center",
    description:
      "Premium single-origin coffee beans, freshly roasted with rich flavor notes.",
    category: "Food & Beverage",
    rating: 4.9,
    reviews: 1654,
  },
  {
    id: "5",
    name: "Portable Phone Charger",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop&crop=center",
    description:
      "Compact 10000mAh power bank with fast charging and multiple device support.",
    category: "Electronics",
    rating: 4.5,
    reviews: 2103,
  },
  {
    id: "6",
    name: "Eco-Friendly Water Bottle",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
    description:
      "Sustainable stainless steel water bottle with temperature retention technology.",
    category: "Lifestyle",
    rating: 4.4,
    reviews: 987,
  },
  {
    id: "7",
    name: "Wireless Gaming Mouse",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    description:
      "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
    category: "Gaming",
    rating: 4.7,
    reviews: 1456,
  },
  {
    id: "8",
    name: "Artisan Handmade Candle",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1602874801006-96639670263a?w=400&h=400&fit=crop&crop=center",
    description:
      "Hand-poured soy candle with natural essential oils and 50-hour burn time.",
    category: "Home Decor",
    rating: 4.8,
    reviews: 743,
  },
];
