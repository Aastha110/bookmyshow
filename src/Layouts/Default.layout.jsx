import React from "react";

//Navbar
import Navbar from "../Components/Navbar/Navbar.components";
//hero carousel
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
  
    return ( 
    <>
    <Navbar />
    <HeroCarousel />
    {props.children}
    </>
    );

};

export default DefaultLayout;