import React from "react";
import { Cartitem, Sortphone } from "../components";

function Catalog() {
    return (
        <div className="container">
            <div className="cart_block">
                <Sortphone />
                <div className="content_items">
                    <Cartitem />
                    <Cartitem />
                    <Cartitem />
                    <Cartitem />
                    <Cartitem />
                    <Cartitem />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
