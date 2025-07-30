import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen((open) => !open);

    return (
        <nav className="navbar">
            <button
                className={`navbar-toggle${menuOpen ? ' open' : ''}`}
                onClick={handleToggle}
                aria-label="Toggle navigation"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className={`navbar-links${menuOpen ? ' show' : ''}`}>
                <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link className="nav-link" to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link>
                <Link className="nav-link" to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;