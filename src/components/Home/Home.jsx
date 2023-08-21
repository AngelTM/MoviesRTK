import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";

import { useMovieActions} from "../../hooks/useMoviesActions";

 
const Home = () => {
  const {fetchMovies,fetchShows} = useMovieActions()
  useEffect(() => {
    fetchMovies("action");
    fetchShows("dragon");

  }, [fetchMovies, fetchShows]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  );
};

export default Home;