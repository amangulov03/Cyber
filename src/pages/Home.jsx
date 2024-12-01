import React, { useEffect } from "react";
import { Banner, Smallerbunner, Endbunner } from "../components";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Banner />
            <Smallerbunner />
            <Endbunner />
        </div>
    );
}

export default Home;
