import React from "react";
import Logo from "../assert/img/Color=White.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="info">
                    <div className="logo_text">
                        <img src={Logo} alt="" />
                        <p>
                            We are a residential interior design firm located in
                            Portland. Our boutique-studio offers more than
                        </p>
                    </div>
                    <div className="footer_nav">
                        <div className="section">
                            <h6>Services</h6>
                            <ul>
                                <li>
                                    <a href="#a">Bonus program</a>
                                </li>
                                <li>
                                    <a href="#a">Gift cards</a>
                                </li>
                                <li>
                                    <a href="#a">Credit and payment</a>
                                </li>
                                <li>
                                    <a href="#a">Service contracts</a>
                                </li>
                                <li>
                                    <a href="#a">Non-cash account</a>
                                </li>
                                <li>
                                    <a href="#a">Payment</a>
                                </li>
                            </ul>
                        </div>
                        <div className="section">
                            <h6>Assistance to the buyer</h6>
                            <ul>
                                <li>
                                    <a href="#a">Find an order</a>
                                </li>
                                <li>
                                    <a href="#a">Terms of delivery</a>
                                </li>
                                <li>
                                    <a href="#a">Exchange and return of goods</a>
                                </li>
                                <li>
                                    <a href="#a">Guarantee</a>
                                </li>
                                <li>
                                    <a href="#a">Frequently asked questions</a>
                                </li>
                                <li>
                                    <a href="#a">Terms of use of the site</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="social_icons">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="icon_twi" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF className="icon_fac" />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTiktok className="icon_tik" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillInstagram className="icon_ins" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
