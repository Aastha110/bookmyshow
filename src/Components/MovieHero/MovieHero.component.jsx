import React from 'react';

const MovieHero = () => {
    return (
        <>
          <div>
            {/*Mobile */}
          <div className=" relative md:hidden w-full" style={{height: "calc(180vw)"}}>
            <div className="absolute w-full h-56 bg-black z-10 bg-opacity-50 bottom-0" />
                  <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster"
                  className="w-full h-full"
                  />
          </div>

         {/*Tablet */}
          <div className=" relative hidden md:block lg:hidden w-full" style={{height: "calc(100vw)"}}>
          <div className="absolute w-full h-56 bg-black z-10 bg-opacity-50 bottom-0" />

                  <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster"
                  className="w-full h-full"
                  />
          </div>

          <div className=" relative hidden lg:block" style={{height: "32rem"}}>
            <div  className="absolute z-10 w-full h-full"
             style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
             />

            <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" 
            alt="poster" className="w-full h-full" />
            </div>    
          </div> 
      </>
    )
};

export default MovieHero;
