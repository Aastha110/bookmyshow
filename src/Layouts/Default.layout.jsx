import React from "react";

//Navbar

import Navbar from "../Components/Navbar/Navbar.components";

const DefaultLayout = (props) => {
  
    return ( 
    <>
    <Navbar />
    {props.children}
    </>
    );

};

export default DefaultLayout;