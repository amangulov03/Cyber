import React from "react";
import Logo from "../assert/img/Color=Black.png";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <nav>
                    <Link to="/">
                        <div className="imeg">
                            <img src={Logo} alt="" className="logo" />
                        </div>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/" className="a">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalog" className="a">
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="a">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="a">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="icons">
                        <CiHeart />
                        <Link to="/cart">
                            <CiShoppingCart />
                            <span>2</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
