import React, { useState, useEffect} from "react";

import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";

//Slider
import PosterSlider from "../Components/PosterSlider/PosterSlider.component";
import axios from "axios";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    })

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    })

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    })

    useEffect(() => {
        const requestLatestMovies = async () => {
            const getLatestMovies = await axios.get("/movie/top_rated");
            setLatestMovies(getLatestMovies.data.results);
        };
        requestLatestMovies();
    })

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
                    <div className="container mx-auto px-4 md:px-16 my-8 flex flex-col gap-3">
                        <div className="hidden md:block">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier"
                                className="w-full h-full" />
                        </div>
                        <PosterSlider images={popularMovies} title="Premieres"
                            subtitle="Brand new relases every friday"
                            isDark />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-16 my-8">
                <PosterSlider images={topRatedMovies} title="Online Streaming Events"
                            isDark= {false} />
            </div>

            <div className="container mx-auto px-4 md:px-16 my-8">
                <PosterSlider images={upcomingMovies} title="Outdoor Events"
                            isDark= {false} />
            </div>

            <div className="container mx-auto px-4 md:px-16 my-8">
                <PosterSlider images={latestMovies} title="Explore Fun Activities"
                            isDark= {false} />
            </div>
        </>

          
    );
    }

export default HomePage;