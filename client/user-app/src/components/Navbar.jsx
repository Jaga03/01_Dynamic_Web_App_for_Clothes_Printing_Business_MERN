import { Link } from 'react-router-dom';
import { useAuth } from '../Store/useAuthStore';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="font-bold text-2xl tracking-wide">StichStudio</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/products" className="hover:underline">Products</Link>
            <button onClick={logout} className="bg-red-600 px-4 py-1 rounded hover:bg-red-700">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
