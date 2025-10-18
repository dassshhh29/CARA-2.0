import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      {/* LOGO */}
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      {/* NAVBAR */}
      <div>
        <ul id="navbar" className={menuOpen ? "active" : ""}>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* CIERRE DEL MENÚ EN MÓVIL */}
          <li>
            <a
              href="#"
              id="close"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* BOTONES: CARRITO + LOGIN */}
      <div className="header-actions">
        <Link to="/cart" id="cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>2</span>
        </Link>

        <Link to="/login">
          <button id="login-btn">Iniciar Sesión</button>
        </Link>
      </div>

      {/* MODO MÓVIL */}
      <div className="mobile">
        <i
          id="bar"
          className="fa-solid fa-bars"
          onClick={() => setMenuOpen(true)}
        ></i>
      </div>
    </header>
  );
};

export default Header;
