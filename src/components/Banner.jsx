import React from "react";
import Button from "./Button";

import bannerIphone from "../assert/img/Iphone Image.png";

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="content">
                        <div className="titles">
                            <h6>Pro.Beyond.</h6>
                            <h1>
                                IPhone 16<span> Pro</span>
                            </h1>
                            <p>
                                Created to change everything for the better. For
                                everyone
                            </p>
                            <Button className="button" outline>
                                <span>Shop Now</span>
                            </Button>
                        </div>
                        <img src={bannerIphone} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
