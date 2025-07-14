# 👕 StichStudio – Custom Clothes Printing Web Application

A fully responsive, secure, and user-friendly e-commerce platform developed for **Zaalima Development Pvt. Ltd.**, where users must first log in or register to access the application. Customers can personalize apparel by uploading custom designs, preview them on clothing mockups, and place orders. Admins can manage products and update order statuses. Built using the **MERN Stack**, integrated with **Cloudinary** for image uploads and **Stripe** for secure payments.

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

## 🖼️ Preview

![App Preview](https://cdn.shopify.com/app-store/listing_images/3dd87416a3b1e12a9ef3604aaaaf4d1e/desktop_screenshot/CIufoveT_YEDEAE=.png?height=720&width=1280)

---

## 🔐 Login-First Design Flow

- The **Login Page is the default entry point** (`/login`)
- Users must **register or log in** before accessing any content
- All pages like Home, Products, Cart, Profile, and Admin Dashboard are **JWT protected**
- Unauthorized users are automatically redirected to the login page

---

## 📦 Tech Stack

| Layer        | Tools/Technologies                        |
|--------------|--------------------------------------------|
| Frontend     | React.js, Tailwind CSS, React Router v6    |
| Backend      | Node.js, Express.js, MongoDB Atlas         |
| Authentication | JWT, bcryptjs                            |
| File Upload  | Cloudinary, Multer                         |
| Payments     | Stripe API                                 |
| Hosting      | Vercel (Frontend), Render (Backend)        |

---

## 🎨 Main Features

### 👤 For Users
- Register/Login (JWT-based)
- Browse and filter products
- Upload design or add text
- Live mockup preview
- Add to cart and checkout
- Stripe payment integration
- View order history and track status

### 🛡️ For Admins
- Login securely as admin
- Add/Edit/Delete products
- Manage inventory variants (size, color, type)
- View all orders
- Update order statuses (Pending → Delivered)

---

## 🗂️ Full Folder Structure

```
stichstudio/
├── client/                          # Frontend built with React + Vite + TS
│   ├── public/                      # Public assets accessible by browser
│   │   ├── favicon.ico              # Browser tab icon
│   │   └── index.html               # HTML template injected by Vite
│   └── src/                         # All frontend source code
│       ├── assets/                 # Images, logos, mockups, etc.
│       ├── components/             # Reusable UI components
│       │   ├── Navbar.tsx          # Top navigation bar
│       │   ├── Footer.tsx          # Bottom footer
│       │   └── PrivateRoute.tsx    # Auth-protected route wrapper
│       ├── contexts/               # Global state providers
│       │   ├── AuthContext.tsx     # Manages login state and JWT token
│       │   └── CartContext.tsx     # Manages shopping cart globally
│       ├── hooks/                  # Custom React hooks
│       │   └── useAuth.ts          # Hook for easy access to AuthContext
│       ├── pages/                  # Main views/routes of the app
│       │   ├── Login.tsx           # User login page
│       │   ├── Register.tsx        # User registration page
│       │   ├── Home.tsx            # Homepage with product showcase
│       │   ├── Product.tsx         # Single product details / listing
│       │   ├── Cart.tsx            # Shopping cart page
│       │   ├── Profile.tsx         # User profile + order history
│       │   └── AdminDashboard.tsx  # Admin panel for managing orders/products
│       ├── services/               # API request functions (via axios)
│       │   ├── authService.ts      # Login, register, profile API
│       │   ├── productService.ts   # Product-related APIs (CRUD)
│       │   └── orderService.ts     # Order/checkout APIs
│       ├── App.tsx                 # Main app with React Router setup
│       └── main.tsx                # ReactDOM root entry point

├── server/                          # Backend built with Node.js + Express
│   ├── config/                     # External services config
│   │   ├── cloudinary.js           # Cloudinary image upload config
│   │   ├── db.js                   # MongoDB connection config
│   │   └── stripe.js               # Stripe payment gateway config
│   ├── controllers/               # Business logic separated from routes
│   │   ├── authController.js       # Register, login, user profile logic
│   │   ├── productController.js    # CRUD operations for products
│   │   └── orderController.js      # Order placement, tracking logic
│   ├── middleware/                # Custom middleware
│   │   ├── authMiddleware.js       # JWT auth checker
│   │   └── errorHandler.js         # Centralized error handler
│   ├── models/                    # Mongoose schemas for MongoDB
│   │   ├── User.js                 # User schema
│   │   ├── Product.js              # Product schema (with variants)
│   │   └── Order.js                # Order schema with payment info
│   ├── routes/                    # Express REST API routes
│   │   ├── auth.js                 # Routes for user auth
│   │   ├── products.js             # Routes for product management
│   │   └── orders.js               # Routes for placing and viewing orders
│   ├── utils/                     # Utility/helper functions
│   │   └── generateToken.js        # Generates JWT token
│   ├── .env                        # Environment variables (PORT, DB, API keys)
│   ├── server.js                   # Entry point for Express server
│   └── README.md                   # Project overview and instructions

```

---

## 🧩 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Jaga03/stichstudio.git
cd stichstudio
```

### 2. Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 3. Configure Environment Variables

#### `/server/.env`
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
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

### 4. Run the App Locally

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm run dev
```

> Visit the app at `http://localhost:3000` — you'll see the Login page first.

---

## 🔐 Sample Admin Login

```
Email: admin@example.com
Password: admin123
```

> You can insert admin manually in MongoDB or via seed script.

---

## 🚀 Deployment Overview

| Component   | Platform    | Description                         |
|-------------|-------------|-------------------------------------|
| Frontend    | Vercel      | CI/CD from GitHub                   |
| Backend     | Render      | RESTful Node.js API                 |
| Database    | MongoDB Atlas | Secure cloud NoSQL               |
| Image Upload| Cloudinary  | For design and product images       |
| Payments    | Stripe      | Secure online payments              |

---

## ✅ Highlights

- 🔒 Login-first with full JWT protection
- 📱 Fully mobile-friendly & responsive (TailwindCSS)
- 🧵 Custom design uploads with live preview
- 🧺 Cart & Stripe-powered secure checkout
- 👨‍💼 Admin panel with product & order management
- 🌐 Deployed on Vercel + Render

---

## 📌 Credits

This project was designed and developed by the **Web Development Team at Zaalima Development Pvt. Ltd.**, Bangalore, under the product name **StichStudio** to simplify and digitize the custom clothing design process.

---

> 💡 Tip: All frontend routes are protected using PrivateRoute and backend APIs are secured with JWT middleware for maximum data privacy.
