import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[1];
    console.log(mainMovie);

    const { title, overview, id } = mainMovie;

  return (
  <div>
    <VideoTitle title={title} overview={overview} />
    <VideoBackground movieID={id}/>
  </div>
  );
};

export default MainContainer;
