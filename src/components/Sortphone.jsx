import React, { useState } from "react";

function Sortphone() {
    const [visibleCheckboxPopup, setVisibleCheckboxPopup] = useState(false);
    const [visibleRadioPopup, setVisibleRadioPopup] = useState(false);
    const [selectedSort, setSelectedSort] = useState("popularity");

    const toggleCheckboxPopup = () => {
        setVisibleCheckboxPopup(!visibleCheckboxPopup);
    };

    const toggleRadioPopup = () => {
        setVisibleRadioPopup(!visibleRadioPopup);
    };

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
    };

    const itemsBrand = [
        { id: "apple", label: "Apple" },
        { id: "samsung", label: "Samsung" },
        { id: "xiaomi", label: "Xiaomi" },
        { id: "poco", label: "Poco" },
    ];

    const itemsSort = [
        { id: "popularity", label: "Popularity" },
        { id: "price", label: "Price" },
    ];

    return (
        <div className="sort">
            {/* Brands */}
            <div className="sort_brand" onClick={toggleCheckboxPopup}>
                <h4>Brand</h4>
                <svg
                    className={visibleCheckboxPopup ? "rotate" : ""}
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M93.5 174.5L256.5 337.5L419.5 174.5"
                        stroke="black"
                        strokeWidth="24"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div
                className={`sort_popap ${visibleCheckboxPopup ? "active" : ""}`}
            >
                <ul>
                    {itemsBrand.map((item) => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                id={item.id}
                                name="brand"
                                value={item.label}
                            />
                            <label htmlFor={item.id}>{item.label}</label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sorting */}
            <div className="sort_brand" onClick={toggleRadioPopup}>
                <h4>Sorting</h4>
                <svg
                    className={visibleRadioPopup ? "rotate" : ""}
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M93.5 174.5L256.5 337.5L419.5 174.5"
                        stroke="black"
                        strokeWidth="24"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div className={`sort_popap ${visibleRadioPopup ? "active" : ""}`}>
                <ul>
                    {itemsSort.map((item) => (
                        <li key={item.id}>
                            <input
                                type="radio"
                                id={item.id}
                                name="sort"
                                value={item.id} 
                                checked={selectedSort === item.id} 
                                onChange={handleSortChange}
                            />
                            <label htmlFor={item.id}>{item.label}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sortphone;
