import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between fixed top-0 left-0 w-full z-50  bg-slate-100 items-center px-8 py-4 border-b">
      {/* Logo */}
      <div className="text-3xl w-20 rounded-full  font-bold">
        <Link to="/" ><img src="./Images/Logo/StichStudio.png"/></Link>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/shop" className="hover:text-red-500">Shop</Link>
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
        <Link to="/sale" className="hover:text-red-500">On Sale</Link>
        <Link to="/contact" className="hover:text-red-500">Contact</Link>
      </div>
      
        


      {/* Icons */}
      <div className="flex gap-6 items-center text-xl">
        <FaSearch className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <div className="relative">
          <FaHeart className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1"></span>
        </div>
        <div className="relative">
          <FaShoppingCart className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">0</span>
        </div>
      </div>
    </nav>
  );
}













