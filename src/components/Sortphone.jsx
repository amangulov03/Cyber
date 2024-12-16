import React, { useState } from "react";

function Sortphone({ value, onclickCategory, onclickSort }) {
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
        const sortValue = event.target.value;
        setSelectedSort(sortValue);
        onclickSort(sortValue); // Передаем выбранный параметр сортировки родительскому компоненту
    };

    const itemsBrand2 = [
        'Все', 'Apple', 'Samsung', 'Xiaomi', 'Poco'
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
                    {itemsBrand2.map((item, i) => (
                        <li key={i} onClick={() => onclickCategory(i)} className={value === i ? "active" : ""}>
                            {item}
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
                        <li key={item.id} className="li_radio">
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
