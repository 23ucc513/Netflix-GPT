import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieID);

  if (!trailerVideo?.key) {
    return <div className="w-screen aspect-video bg-black" />;
  }

  const embedUrl =
    "https://www.youtube.com/embed/" +
    "?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=" +
    trailerVideo.key;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
