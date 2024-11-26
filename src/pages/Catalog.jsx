import React, { useEffect, useState } from "react";
import { Cartitem, Sortphone } from "../components";

function Catalog() {
    const [items, setAitems] = useState([]);

    useEffect(() => {
        fetch("https://6745c6f0512ddbd807f99a6c.mockapi.io/items")
            .then((res) => res.json())
            .then((arr) => {
                setAitems(arr);
            });
    }, []);

    return (
        <div className="container">
            <div className="cart_block">
                <Sortphone />
                <div className="content_items">
                    {items.map((obj) => (
                        <Cartitem key={obj.id} {...obj} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
