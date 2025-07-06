# 👕 Custom Clothes Printing Web Application

A dynamic and scalable e-commerce platform developed for **Zaalima Development Pvt. Ltd.**, enabling customers to design and order personalized apparel online. The system supports user-driven customization, live mockup previews, secure payments, and complete admin-side order and inventory management.

---

## 🏢 Company

**Zaalima Development Pvt. Ltd.**  
Bangalore, India  
🔗 [Google Business Profile](https://g.co/kgs/4wE7SgN)

---

## 🌐 Live Demo

> 🔗 [Frontend (Vercel)](https://your-frontend-url.vercel.app)  
> 🔗 [Backend (Render)](https://your-backend-url.onrender.com)

---

## 📸 Preview

![App Preview](https://your-cloudinary-url.com/app-preview.png)

---

## 🧱 Tech Stack

**Frontend**  
- React.js  
- Tailwind CSS  
- React Router  
- React Hook Form, Toastify, Framer Motion

**Backend**  
- Node.js + Express.js  
- MongoDB Atlas  
- JWT (Access & Refresh Tokens)  
- Stripe (Payment Gateway)  
- Cloudinary (Image Storage)

**DevOps & Hosting**  
- Vercel (Frontend)  
- Render (Backend)  
- MongoDB Atlas (Database)

---

## 💼 Business Features

### 👤 Customer Features
- Secure user registration & login with JWT  
- Browse and filter clothing items  
- Upload personal designs for printing  
- Live design preview on clothing mockups  
- Add to cart & checkout with Stripe  
- Track order status & view order history  

### 🔐 Admin Panel
- Role-based access (Admin/User)  
- Manage products (Create, Edit, Delete)  
- Handle inventory variants (Size, Color, Type)  
- View and update order statuses  
- Monitor transactions and user activities

---

## 📁 Folder Structure

```
custom-clothes-printing-app/
├── client/                         # Frontend - React + Tailwind CSS
│   ├── public/
│   └── src/
│       ├── components/            # Reusable UI components
│       ├── pages/                 # Application pages (Home, Product, Cart, etc.)
│       ├── hooks/                 # Custom React hooks
│       ├── services/              # Axios API calls
│       ├── utils/                 # Helper functions (formatting, constants, etc.)
│       └── App.tsx

├── server/                         # Backend - Node.js + Express
│   ├── config/                    # Cloudinary, Stripe, DB configs
│   ├── controllers/              # Route logic for products, users, orders
│   ├── middleware/               # JWT auth, error handling, etc.
│   ├── models/                   # ✅ Database Models (MongoDB)
│   │   ├── User.js               # User schema
│   │   ├── Product.js            # Product schema with variants
│   │   ├── Order.js              # Order and payment details
│   │   └── ...                   # Additional models (if needed)
│   ├── routes/                   # API endpoints (auth, products, orders)
│   ├── utils/                    # Token generation, validators, etc.
│   ├── server.js                 # Entry point
│   └── .env                      # Environment variables

└── README.md
```


---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Jaga03/custom-clothes-printing-app.git
cd custom-clothes-printing-app
```

---

### 2. Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

---

### 3. Environment Configuration

Create `.env` files with the following variables:

#### `/server/.env`
```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### `/client/.env`
```
VITE_API_URL=http://localhost:5000/api
```

---

### 4. Run Locally

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm run dev
```

---

## 🛂 Admin Access (Sample)

```text
Email: admin@example.com
Password: admin123
```

You can customize this in your database or initial seeding script.

---

## 🚀 Deployment Overview

| Service      | Platform  |
|--------------|-----------|
| Frontend     | Vercel    |
| Backend API  | Render    |
| Database     | MongoDB Atlas |
| Image Hosting| Cloudinary |
| Payments     | Stripe    |

---

## 📌 Credits

This project was collaboratively developed by the **Web Development Team at Zaalima Development Pvt. Ltd.** as part of a professional e-commerce solution tailored for the custom clothing industry.

---
