# 🛒 Next.js E-Commerce Frontend

A modern e-commerce frontend built with **Next.js App Router**, **TypeScript**, and **shadcn/ui**.  
This project focuses on performance, scalability, clean UI, and type-safe state & form handling.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui + Radix UI**
- **Zustand** – global state management
- **React Hook Form** – form handling
- **Zod** – schema validation
- **Lucide React** – icons

---

## ✨ Features

### 🛍 Cart System

- Add products to cart
- Auto-increment quantity for existing items
- Remove items from cart
- Floating cart button
- Global cart state using Zustand

### 🔍 Filtering & Sorting

- Rating filter (⭐ 1–5)
- Price range slider
- Sort by price, rating, or newest
- Order ascending / descending

### 📝 Forms & Validation

- Sign up & checkout forms
- Type-safe validation with Zod
- React Hook Form integration
- Accessible error handling

### 🎨 UI / UX

- Responsive layout
- Reusable components
- Accessible (keyboard & screen reader friendly)
- Clean and minimal design

---

## 📂 Project Structure

```bash
src/
├── app/                   # Next.js App Router
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── cart/              # Cart & floating cart button
│   ├── filters/           # Rating, price, sort components
│   └── ui/                # shadcn/ui components
├── store/
│   └── cart-store.ts      # Zustand cart store
├── lib/
│   ├── schemas/           # Zod schemas
│   └── utils.ts
├── styles/
└── types/
```

## 🧠 State Management (Zustand)

The cart state is handled globally using Zustand:

- Prevents duplicate products
- Automatically updates quantity
- Optimized re-renders
- Fully type-safe

Example responsibilities:

- addItem
- removeItem
- increaseQuantity
- decreaseQuantity
- clearCart

## 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

### ▶️ Run Locally

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

### 🧪 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

### 🔐 Environment Variables

Create a .env.local file if needed:

```js
NEXT_PUBLIC_API_URL = your_api_url_here;
```

### 🧩 Future Improvements

- Persist cart using localStorage
- Authentication (NextAuth)
- Payment gateway integration
- Backend API connection
- Product pagination & search
- Unit & integration testing

### 📄 License

MIT License

### 👤 Author

Grand Marcell
<br>
Frontend Developer (React & Next.js)
<br>
Based in Indonesia 🇮🇩
<br>
Aspiring to work in the Netherlands 🇳🇱

## ⭐ If you like this project, feel free to give it a star!
