import React from "react";

const Player = ({ video }) => {
  return (
    <div className="w-[600px] h-96 ">
      {!video ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="h-full">
            <iframe
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
              allow="autoplay"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-3">
            <h4 className="my-2 ">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Player;
