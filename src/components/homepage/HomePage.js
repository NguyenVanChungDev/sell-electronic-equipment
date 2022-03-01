import React from "react";
import LaptopPage from "../feature/Laptop";
import PhonePage from "../feature/Phone";
import Slider from "../Slider";

const HomePage = () => {
    return (
        <div>
            <Slider />
            <PhonePage />
            <LaptopPage />
        </div>
    );
};

export default HomePage;
