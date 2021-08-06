import React from 'react';
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {
  return (
    <>
      <div>
        {/*Mobile */}
        <div className=" relative md:hidden w-full" style={{ height: "calc(180vw)" }}>

          <div className="absolute z-20 bottom-4 left-4">
            <MovieInfo />
          </div>

          <div className="absolute w-full h-56 bg-black z-10 bg-opacity-50 bottom-0" />
          <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster"
            className="w-full h-full"
          />
        </div>

        {/*Tablet */}
        <div className=" relative hidden md:block lg:hidden w-full" style={{ height: "calc(100vw)" }}>

          <div className="absolute z-20 bottom-4">
            <MovieInfo />
          </div>
          <div className="absolute w-full h-56 bg-black z-10 bg-opacity-50 bottom-0" />

          <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster"
            className="w-full h-full"
          />
        </div>

        {/*Large screen */}
        <div className=" relative hidden lg:block" style={{ height: "32rem" }}>
          <div className="absolute z-10 w-full h-full"
            style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
          />

          <div className="z-30 absolute left-24 top-16 flex items-center gap-10">
            <div className="h-96 w-64 ">
              <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                alt="poster" className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>


          <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
            alt="poster" className="w-full h-full" />
        </div>
      </div>
    </>
  )
};

export default MovieHero;
