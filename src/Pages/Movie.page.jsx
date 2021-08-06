import React from 'react';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

//component
import MovieHero from '../Components/MovieHero/MovieHero.component';
import Cast from '../Components/Cast/Cast.component';

//config
import TempPosters from "../config/TempPosters.config";

//Slider
import PosterSlider from "../Components/PosterSlider/PosterSlider.component";

export const Movie = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className=" my-12 container px-4 lg:w-2/3 lg:ml-20">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">
                        About the movie</h2>
                    <p>
                        Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
                    </p>
                </div>
                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl my-3">Applicable offers</h2>

                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-200 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-800 text-xl font-bold">
                                    Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                    Get 50% off upto INR 150 on all RuPay cards* on BookMyShow Stream.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-200 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-800 text-xl font-bold">
                                    Filmy Pass
                                </h3>
                                <p className="text-gray-600">
                                    Get 75% off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99 .
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
                    <div className="flex flex-wrap gap-4">
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
                            castName="Henry Cavil" role="Superman" />

                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot" role="Wonder Woman" />

                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg"
                            castName="Ray Fisher" role="Victor Stone" />
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <div className="container mx-auto px-4 my-8">
                        <PosterSlider
                            config={settings}
                            images={TempPosters} title="You might also like"
                            isDark={false} />
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <div className="container mx-auto px-4 my-8">
                        <PosterSlider
                            config={settings}
                            images={TempPosters} title="BMS XCLUSIV"
                            isDark={false} />
                    </div>
                </div>

            </div>
        </>
    )
};

export default Movie;
