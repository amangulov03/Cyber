import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

import EmptyCart from "./empty-cart.png";

function NotFoundBlock() {
    return (
        <div className="notFoundBlock">
            <h1>The basket is empty 😕</h1>
            <img src={EmptyCart} alt="" />
            <Link to="/catalog">
                <Button className="back">
                    <svg
                        data-name="Livello 1"
                        id="Livello_1"
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                    >
            
                        <path d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z" />
                    </svg>
                    <span>Back</span>
                </Button>
            </Link>
        </div>
    );
}

export default NotFoundBlock;
