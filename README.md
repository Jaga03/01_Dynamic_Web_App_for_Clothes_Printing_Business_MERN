# 👕 Custom Clothes Printing Web Application

A fully responsive, secure, and scalable e-commerce platform developed for **Zaalima Development Pvt. Ltd.**, where customers can personalize apparel by uploading custom designs, preview them on product mockups, and place orders. Admins can manage inventory, process orders, and update delivery statuses. Built with the **MERN stack**, this solution combines modern UI, secure authentication, and seamless payment integration.

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

![App Preview](https://cdn.shopify.com/app-store/listing_images/3dd87416a3b1e12a9ef3604aaaaf4d1e/desktop_screenshot/CIufoveT_YEDEAE=.png?height=720&width=1280)

---

## 🧱 Tech Stack

| Layer      | Tools/Technologies                                                                 |
|------------|-------------------------------------------------------------------------------------|
| Frontend   | React.js, Tailwind CSS, React Router, React Hook Form, Axios, Framer Motion        |
| Backend    | Node.js, Express.js, MongoDB Atlas, JWT (Auth), Bcrypt.js, CORS                    |
| File Upload| Cloudinary + Multer                                                                |
| Payments   | Stripe API                                                                         |
| Deployment | Vercel (Frontend), Render (Backend), MongoDB Atlas (Database)                     |

---

## 💼 Core Functionalities

### 👤 Customer Features
- Register & login securely (JWT-based)
- Browse products with filters (size, color, type)
- Upload personal design (PNG/JPEG) for T-shirts
- Live preview on clothing mockups
- Add to cart & update quantity
- Checkout via Stripe
- Track current and past orders
- View full order history

### 🔐 Admin Features
- Admin login with secure access
- Add, update, or delete products
- Manage product variants (size, color, type)
- View all user orders with filter
- Update order status (Pending → Shipped → Delivered)
- Dashboard overview of sales and users

---

## 📁 Folder Structure

```
custom-clothes-printing-app/
├── client/                         # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/                # App-wide static assets
│       ├── components/            # Navbar, Footer, ProductCard, etc.
│       ├── pages/                 # Home, ProductDetails, Cart, Profile, AdminDashboard
│       ├── services/              # Axios services (auth, product, order APIs)
│       ├── contexts/              # Auth context, Cart context
│       ├── App.tsx                # Main routing & layout
│       └── index.tsx              # Entry point

├── server/                         # Node + Express Backend
│   ├── config/                    # Cloudinary, Stripe, MongoDB connection
│   ├── controllers/              # Logic for products, auth, orders
│   ├── middleware/               # JWT auth, error handler
│   ├── models/                   # MongoDB Mongoose Schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   ├── routes/                   # Express routes (auth, product, order)
│   ├── utils/                    # Token handling, image filters
│   ├── server.js                 # Entry point for backend
│   └── .env                      # Environment configuration

└── README.md
```

---

## 🗓️ Development Timeline

### ✅ Week 1: Setup + Authentication
- Initialized React + Tailwind frontend
- Set up Express.js backend with MongoDB Atlas
- Created `User` schema and JWT auth system
- Implemented login, registration & token-based access control

### ✅ Week 2: Product & Design Upload
- Built `Product` schema with size, color, and type variants
- Product listing, detail, and filtering functionality
- Integrated Cloudinary for custom design uploads
- Preview uploaded design on a mockup T-shirt
- Cart functionality using React Context API

### ✅ Week 3: Payments & Admin Panel
- Integrated Stripe for secure checkout
- Created order schema and user order flow
- Developed Admin Dashboard to manage products and view orders
- Implemented order status updates

### ✅ Week 4: User Profile, Order History & Deployment
- Built user profile with past order history
- Added order tracking and filtering
- Final mobile responsiveness testing
- Deployed frontend to Vercel, backend to Render

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

### 3. Environment Variables

#### `/server/.env`
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### `/client/.env`
```
VITE_API_URL=http://localhost:5000/api
```

---

### 4. Run Locally

```bash
# Start Backend
cd server
npm run dev

# Start Frontend
cd ../client
npm run dev
```

Visit: `http://localhost:3000`

---

## 🛂 Admin Access (Sample)

```text
Email: admin@example.com
Password: admin123
```

> Modify these credentials manually in MongoDB or use a seed script to insert admin data.

---

## 🚀 Deployment Overview

| Component     | Platform      | Description                    |
|---------------|---------------|--------------------------------|
| Frontend      | Vercel        | Auto CI/CD from GitHub         |
| Backend API   | Render        | Node/Express REST API          |
| Database      | MongoDB Atlas | Cloud-hosted NoSQL DB          |
| Image Uploads | Cloudinary    | Stores designs & product images|
| Payments      | Stripe        | Secure checkout                |

---

## 📌 Project Highlights

- ✅ Full JWT authentication system (Login/Register/Logout)
- ✅ Cloudinary-powered image upload + preview
- ✅ Cart, Checkout & Stripe integration
- ✅ Admin Dashboard (CRUD + order tracking)
- ✅ Mobile-first responsive layout (100% device friendly)
- ✅ Full-stack deployed to production

---

## 📌 Credits

This project was designed, developed, and deployed by the **Web Development Team at Zaalima Development Pvt. Ltd.** as part of a digital transformation solution for the modern clothing customization industry. It ensures a smooth end-to-end experience from customer design upload to admin-controlled order dispatch.

---

> **Note:** All APIs are RESTful, and the UI follows accessibility and responsive design best practices. All code is modular, scalable, and version-controlled using Git and GitHub.

---
