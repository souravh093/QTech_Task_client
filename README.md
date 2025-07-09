# 🛍️ ShopHub - Modern E-commerce Platform

A modern, responsive e-commerce platform built with React, TypeScript, and Redux Toolkit. ShopHub provides a seamless shopping experience with a beautiful UI, cart management, and persistent state.

![ShopHub Preview](https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center)

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Product Catalog**: Browse through a curated selection of products
- **Product Details**: Detailed product pages with image galleries
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Skeleton screens for better user experience
- **Toast Notifications**: Real-time feedback for user actions
- **Checkout Flow**: Complete checkout process with form validation

## 🚀 Live Demo

Visit the live application: [ShopHub Live Demo](https://qtech-shop.vercel.app/)

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence
- **React Router Dom** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### UI Components

- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Class Variance Authority** - Component variants

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Plugin React** - React support for Vite

## 🏃‍♂️ How to Run Locally

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/souravh093/QTech_Task_client
   cd QTech_Task_client/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
client/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── CartSidebar.tsx
│   │   │   └── CheckoutModal.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   ├── constant/
│   │   └── products.ts
│   ├── layouts/
│   │   └── CommonLayout.tsx
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.tsx
│   │   ├── ProductDetail/
│   │   │   └── ProductDetail.tsx
│   │   └── Error/
│   │       └── Error.tsx
│   ├── redux/
│   │   ├── features/
│   │   │   └── cart/
│   │   │       └── cartSlice.ts
│   │   ├── services/
│   │   │   └── baseApi.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── routes/
│   │   └── routes.tsx
│   ├── types/
│   │   └── cart/
│   │       └── cart.interface.ts
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Key Features Implementation

### State Management

- **Redux Toolkit** for efficient state management
- **RTK Query** for server state management

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Responsive grid layouts
- Touch-friendly interactions

### Performance Optimizations

- Code splitting with React.lazy
- Optimized images with proper sizing
- Efficient re-renders with proper state structure

### User Experience

- Loading skeleton screens
- Smooth animations and transitions
- Toast notifications for feedback
- Intuitive navigation

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the client directory:

```env
VITE_API_URL=https://qtech-server.vercel.app/api/v1
```

### Tailwind CSS

The project uses Tailwind CSS v4 with custom animations and responsive design utilities.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com/) for high-quality product images
- [Lucide](https://lucide.dev/) for beautiful icons
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## 📧 Contact

For any questions or suggestions, feel free to reach out:

- Email: souravehalder925@gmail.com
- GitHub: [@yourusername](https://github.com/souravh093)

---

Made with ❤️ by [Your Name]
