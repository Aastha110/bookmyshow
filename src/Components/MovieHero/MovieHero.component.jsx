import React, { useContext } from 'react';
import MovieInfo from './MovieInfo.component';

//Context
import { MovieContext } from '../../Context/Movie.context';

const MovieHero = () => {
const { movie } = useContext(MovieContext);

  return (
    <>
      <div>
        {/*Mobile */}
        <div className=" relative md:hidden w-full" style={{ height: "calc(180vw)" }}>

          <div className="absolute z-20 bottom-4 left-4">
            <MovieInfo />
          </div>

          <div className="absolute w-full h-56 bg-black z-10 bg-opacity-50 bottom-0" />
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"
            className="w-full h-full"
          />
        </div>

        {/*Tablet */}
        <div className=" relative hidden md:block lg:hidden w-full" style={{ height: "calc(100vw)" }}>

          <div className="absolute z-20 bottom-4">
            <MovieInfo />
          </div>
          <div className="absolute w-full h-56 bg-black z-10 bg-opacity-50 bottom-0" />

          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"
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
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="poster" className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>


          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="poster" className="w-full h-full" />
        </div>
      </div>
    </>
  )
};

export default MovieHero;
