import React from "react";

import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";

import Premier from "../Components/Premier/Premier.component";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl lg:text-2xl font-bold text-gray-800 my-2 lg:mx-8">
                        The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-bms-800 py-12 ">
                    <div className="container mx-auto px-16 my-4 flex flex-col gap-3">
                        <div className="hidden md:block">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier"
                                className="w-full h-full" />
                        </div>
                        <Premier />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;