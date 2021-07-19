import React from "react";

import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
const HomePage = () => {
    return (
        <>
        <div className="container mx-auto px-4">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800 my-4 lg:mx-8">
            The best of Entertainment</h1>
          <EntertainmentCardSlider />
        </div>
        </>
    )
};

export default HomePage;