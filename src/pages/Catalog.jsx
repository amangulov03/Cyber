import React, { useEffect, useState } from "react";
import { Cartitem, Sortphone, Skeleton } from "../components";

function Catalog() {
    const [items, setAitems] = useState([]);
    const [isLaoding, setIsLaoding] = useState(true);

    useEffect(() => {
        fetch("https://6745c6f0512ddbd807f99a6c.mockapi.io/items")
            .then((res) => res.json())
            .then((arr) => {
                setAitems(arr);
                setIsLaoding(false);
            });
            window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="cart_block">
                <Sortphone />
                <div className="content_items">
                    {isLaoding
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.map((obj) => (
                              <Cartitem key={obj.id} {...obj} />
                          ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
