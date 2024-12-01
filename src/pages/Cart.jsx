import React from "react";

import { Link } from "react-router-dom";
// import { NotFoundBlock } from "../components";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Button from "../components/Button";

function Cart() {
    return (
        <div className="container">
            <div className="main_cart">
                <div className="car_top">
                    <span>
                        <MdOutlineShoppingCart className="icon_cart" />{" "}
                        <h1>Cart</h1>
                    </span>
                    <span className="clear">
                        <FaRegTrashCan className="icon" />{" "}
                        <p>Очистить корзину</p>
                    </span>
                </div>
                <div className="content_items">
                    <div className="cart_item_img">
                        <img src="" alt="Iphone" />
                    </div>
                    <div className="cart_item_info">
                        <h3>Iphone Pro</h3>
                        <p>512МБ</p>
                    </div>
                    <div className="btn cart__item-count-minus">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                        </svg>
                    </div>
                    <b>2</b>
                    <div className="btn cart__item-count-plus">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                        </svg>
                    </div>
                    <div className="cart_item_price">
                        <b>$1000</b>
                    </div>
                    <div className="cart_item_remove">
                        <div className="btn">
                            <svg
                                className="degs"
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="cart_bottom">
                    <div className="cart_bottom_deteils">
                        <span>
                            Total: <b>2 pc.</b>
                        </span>
                        <span>
                            Order amount: <b>$2000</b>
                        </span>
                    </div>
                    <div className="cart_bottom_buttons">
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
                                <span>Вернуться назад</span>
                            </Button>
                        </Link>

                        <Button>
                            <span>Оплатить сейчас</span>
                        </Button>
                    </div>
                </div>
            </div>
            {/* <NotFoundBlock /> */}
        </div>
    );
}

export default Cart;
