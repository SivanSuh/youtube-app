import React from "react";

const Card = ({ video, onVideoSelect }) => {
  console.log("video", video);
  return (
    <div
      key={video.etag}
      className="m-3 w-96 "
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <div>
        <img
          src={video.snippet.thumbnails?.high.url}
          alt={video.snippet.title}
        />
      </div>
      <div>
        <span>{video.snippet.title}</span>
      </div>
    </div>
  );
};

export default Card;
