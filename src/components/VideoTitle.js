const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl text-white font-bold w-1/3">{title}</h1>
      <p className="py-6 text-lg text-white w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">ℹ️ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
