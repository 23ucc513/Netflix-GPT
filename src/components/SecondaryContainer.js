import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="pl-12 -mt-52 relative z-20 text-white">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      </div>
      {/*
            Movie List - Popular
                Movie Card * n
            Movie List - Now Playing
            Movie List - Trending
            Movie List - Horror
            .
            .
        */}
    </div>
  );
};

export default SecondaryContainer;
