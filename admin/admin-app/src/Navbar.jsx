Navbar.jsx
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo/StichStudio2.png" alt="Stitchstudio Logo" />
        </Link>
      </div>

      <div className="navbar-links">
        <div className="dropdown">
          <Link to="/products">Products</Link>
          <div className="dropdown-content">
            <Link to="/products/mens">Mens</Link>
            <Link to="/products/womens">Womens</Link>
            <Link to="/products/kids">Kids</Link>
          </div>
        </div>

        <Link to="/contact">Contact</Link>
        <Link to="/login">
          <button className="btn login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn signup">Signup</button>
        </Link>
      </div>
    </nav>
  );
}
