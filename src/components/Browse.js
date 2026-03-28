import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header logoSize="w-32" />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
      MainContainer
        - Video Background
        - Video Title
      SecondaryContainer
        - Movie List * n
            - cards * n
      */}
    </div>
  );
};
export default Browse;
