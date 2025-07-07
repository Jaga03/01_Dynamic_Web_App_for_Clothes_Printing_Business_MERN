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
├── client/                         # React Frontend
│   ├── public/                     # Public static assets (favicon, index.html)
│   └── src/
│       ├── assets/                # Static images and mockups
│       ├── components/            # Shared components
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── PrivateRoute.tsx
│       ├── contexts/              # Auth & Cart Context Providers
│       │   ├── AuthContext.tsx
│       │   └── CartContext.tsx
│       ├── hooks/                 # Custom React hooks
│       │   └── useAuth.ts
│       ├── pages/                 # Main page views
│       │   ├── Login.tsx
│       │   ├── Register.tsx
│       │   ├── Home.tsx
│       │   ├── Product.tsx
│       │   ├── Cart.tsx
│       │   ├── Profile.tsx
│       │   └── AdminDashboard.tsx
│       ├── services/              # Axios API services
│       │   ├── authService.ts
│       │   ├── productService.ts
│       │   └── orderService.ts
│       ├── App.tsx                # Application routing
│       └── main.tsx               # React DOM render
│
├── server/                         # Node Backend
│   ├── config/                    # Cloudinary, Stripe, DB config
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── stripe.js
│   ├── controllers/              # Business logic
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── middleware/               # JWT protection, error handlers
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/                   # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/                   # Express REST API routes
│   │   ├── auth.js
│   │   ├── products.js
│   │   └── orders.js
│   ├── utils/                    # Token helpers, validators
│   │   └── generateToken.js
│   ├── .env                      # Environment config
│   ├── server.js                 # Entry point
│   └── README.md
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
