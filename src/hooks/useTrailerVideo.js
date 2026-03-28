import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieID) => {
  const dispatch = useDispatch();
  // fetch trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieID+"/videos",
      API_OPTIONS,
    );
    const json = await data.json();
    const trailer =
      json.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      ) || json.results?.find((video) => video.site === "YouTube") || null;
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideo;
