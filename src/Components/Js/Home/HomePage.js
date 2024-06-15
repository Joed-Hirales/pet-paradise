import React from "react";
import CardList from "./CardList";
import ControlledCarousel from "./ControlledCarousel";
import "../../css/HomePage.css";
function HomePage() {
    return (
        <div>
            <div className="ContainerCarousel"> <ControlledCarousel /> </div>
            <div className="ContainerCardList"> <CardList /> </div>
        </div>
    )
} export default HomePage;