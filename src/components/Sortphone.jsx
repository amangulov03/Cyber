import React, { useState } from "react";

function Sortphone() {
    const [visisblePopup, setVisisblePopup] = useState(false);

    const toggleVisiblePopup = () => {
        setVisisblePopup(!visisblePopup);
    };

    const items = [
        { id: "apple", label: "Apple" },
        { id: "samsung", label: "Samsung" },
        { id: "xiaomi", label: "Xiaomi" },
        { id: "poco", label: "Poco" },
    ];
    return (
        <div className="sort">
            <div className="sort_brand" onClick={toggleVisiblePopup}>
                <h4>Brand</h4>
                <svg
                    className={visisblePopup ? "rotate" : ""}
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
            <div className={`sort_popap ${visisblePopup ? "active" : ""}`}>
                <ul>
                    {items.map((item) => (
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
        </div>
    );
}

export default Sortphone;
