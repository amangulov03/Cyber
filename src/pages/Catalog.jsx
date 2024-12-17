import React, { useEffect, useState } from "react";
import { Cartitem, Sortphone, Skeleton } from "../components";

function Catalog() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState("");

    const [searchValue, setSearchValue] = React.useState("");

    useEffect(() => {
        setIsLoading(true);
        fetch("https://6745c6f0512ddbd807f99a6c.mockapi.io/items")
            .then((res) => res.json())
            .then((arr) => {
                let filteredItems = arr;

                // Фильтруем по категории
                if (categoryId !== 0) {
                    filteredItems = arr.filter(
                        (item) => item.category === categoryId
                    );
                }

                // Применяем сортировку
                if (sortType === "popularity") {
                    filteredItems = filteredItems.sort(
                        (a, b) => b.rating - a.rating
                    );
                } else if (sortType === "price") {
                    filteredItems = filteredItems.sort(
                        (a, b) => b.price - a.price
                    );
                }

                setItems(filteredItems);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(`https://6745c6f0512ddbd807f99a6c.mockapi.io/items?${
    //         categoryId > 0 ? `category=${categoryId}` : ''
    //     }&sortBy=${sortType}&order=desc`,)
    //         .then((res) => res.json())
    //         .then((arr) => {
    //             setItems(arr);
    //             setIsLoading(false);
    //         });
    //         window.scrollTo(0, 0);
    // }, [categoryId, sortType]);

    return (
        <div className="container">
            <div className="cart_block">
                <Sortphone
                    searchValue={searchValue} setSearchValue={setSearchValue}
                    value={categoryId}
                    onclickCategory={(i) => setCategoryId(i)}
                    onclickSort={(sortType) => setSortType(sortType)}
                />
                <div className="content_items">
                    {isLoading
                        ? [...new Array(6)].map((_, index) => (
                              <Skeleton key={index} />
                          ))
                        : items.map((obj) => (
                              <Cartitem key={obj.id} {...obj} />
                          ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
