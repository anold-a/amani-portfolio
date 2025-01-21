"use client";

import "../styles/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="container">
                <div className="header">
                    <img src="/logo.svg" width={100} height={100} alt="navbar-logo" />
                    <button onClick={toggle} className="humburger">
                        <span className="bar">Mobile Navbar</span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
                       <li>
          <Link to="/">Home</Link>
        </li>
                        <li>
          <Link to="/pages/Contact">Contact</Link>
        </li>
                       <li>
          <Link to="pages/About">About</Link>
        </li>
                       <li>
          <Link to="pages/Skills">Skills</Link>
        </li>
                    </ul>
                </div>
        </nav>
        
        </>
        
    )
}
export default Navbar;