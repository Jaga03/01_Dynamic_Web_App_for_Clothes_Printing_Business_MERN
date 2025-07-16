Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-white shadow-md z-50">
      <div className="text-center">
        <Link to="/">
          <img
            src="/logo/StichStudio2.png"
            alt="Stichstudio Logo"
            className="w-1/3 max-w-[330px]"
          />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <Link to="/products" className="text-gray-800 font-medium hover:text-blue-600">
            Products
          </Link>
          <div className="absolute hidden group-hover:block bg-gray-800 text-gray-100 min-w-[140px] mt-2 rounded shadow-lg">
            <Link to="/products/mens" className="block px-4 py-2 hover:bg-gray-700">
              Mens
            </Link>
            <Link to="/products/womens" className="block px-4 py-2 hover:bg-gray-700">
              Womens
            </Link>
            <Link to="/products/kids" className="block px-4 py-2 hover:bg-gray-700">
              Kids
            </Link>
          </div>
        </div>

        <Link to="/contact" className="text-gray-800 font-medium hover:text-blue-600">
          Contact
        </Link>

        <Link to="/login">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
}

