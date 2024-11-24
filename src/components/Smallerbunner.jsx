import React from "react";
import Button from "./Button";

import PlayStation from "../assert/img/PlayStation.png";
import hero__gnfk from "../assert/img/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import appple__vision from "../assert/img/image 36.png";
import MacBook from '../assert/img/MacBook Pro 14.png'

function Smallerbunner() {
    return (
        <div className="smaller_bunner">
            <div className="left_banner">
                <div className="wide_banner">
                    <img src={PlayStation} alt="" />
                    <div className="title_text">
                        <h4>Playstation 5</h4>
                        <p>
                            Incredibly powerful CPUs, GPUs, and an SSD with
                            integrated I/O will redefine your PlayStation
                            experience.
                        </p>
                    </div>
                </div>
                <div className="squares">
                    <div className="left_squares">
                        <img src={hero__gnfk} alt="" />
                        <div className="title_text">
                            <h3>
                                Apple AirPods <span>Max</span>
                            </h3>
                            <p>Computational audio. Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className="right_squares">
                        <img src={appple__vision} alt="" />
                        <div className="title_text">
                            <h3>
                                Apple Vision <span>Pro</span>
                            </h3>
                            <p>An immersive way to experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="big_banner">
                <div className="content">
                    <div className="title_text">
                        <h5>
                            Macbook <span>Air</span>
                        </h5>
                        <p>
                            The new 15‑inch MacBook Air makes room for more of
                            what you love with a spacious Liquid Retina display.
                        </p>
                        <Button className="button">
                            <span>Shop Now</span>
                        </Button>
                    </div>
                </div>
                <img src={MacBook} alt="" />
            </div>
        </div>
    );
}

export default Smallerbunner;
