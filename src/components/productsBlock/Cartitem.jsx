import React, { useState } from "react";
import Button from "../Button";

function Cartitem({ name, price, imageUrl, colors, types }) {
    const [colorHeart, setColorHeart] = useState("#ffffff");
    const [isPulsing, setIsPulsing] = useState(false);
    const [selectedImage, setSelectedImage] = useState(imageUrl); // Текущее изображение телефона
    const [activeType, setActiveType] = useState(types.includes(0) ? 0 : 1);

    const handleHeartClick = () => {
        setColorHeart((prevColor) =>
            prevColor === "#ffffff" ? "red" : "#ffffff"
        );
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 300); // Отключаем пульсацию через 300 мс
    };

    const handleColorClick = (colorOption) => {
        setSelectedImage(colorOption.imageUrl); // Меняем изображение при выборе цвета
    };

    const typeName = ["128ГБ", "258ГБ", "516ГБ", "1ТБ"];

    return (
        <div className="phone_block">
            <svg
                onClick={handleHeartClick}
                className={isPulsing ? "pulse" : ""}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={colorHeart} // Цвет заливки
                stroke={colorHeart === "#ffffff" ? "black" : "red"} // Цвет границы
            >
                <path
                    d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
            <img src={selectedImage} alt={name} />
            <p>{name}</p>
            <div className="color_options">
                {colors.map((colorOption, index) => (
                    <div
                        key={index}
                        className="color_circle"
                        style={{ backgroundColor: colorOption.color }}
                        onClick={() => handleColorClick(colorOption)}
                    ></div>
                ))}
            </div>
            <div className="phone_memory">
                <ul>
                    {types.map((typeID) => (
                        <li
                            key={typeID}
                            className={activeType === typeID ? "active" : ""}
                            onClick={() => setActiveType(typeID)}
                        >
                            {typeName[typeID]}
                        </li>
                    ))}
                </ul>
            </div>
            <span className="price_text">${price}</span>
            <Button>
                <span>Buy Now</span>
            </Button>
        </div>
    );
}

export default Cartitem;
