import React, { useState, useEffect } from "react";
import Logo from "../assert/img/Color=Black.png";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Закрытие меню при клике вне блока
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                menuOpen &&
                !event.target.closest(".menu") &&
                !event.target.closest(".burger")
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <div className="header">
            <div className="container">
                <nav>
                    <Link to="/">
                        <div className="imeg">
                            <img src={Logo} alt="Logo" className="logo" />
                        </div>
                    </Link>
                    <div className={`menu ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <Link to="/" className="a" onClick={closeMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/catalog"
                                    className="a"
                                    onClick={closeMenu}
                                >
                                    Catalog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="a"
                                    onClick={closeMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="a"
                                    onClick={closeMenu}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="icons">
                            <CiHeart />
                            <Link to="/cart">
                                <CiShoppingCart />
                                <span>2</span>
                            </Link>
                        </div>
                        <div
                            className={`burger ${menuOpen ? "open" : ""}`}
                            onClick={toggleMenu}
                        >
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
