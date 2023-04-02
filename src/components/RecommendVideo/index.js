import React from "react";

const RecommendVideo = ({ video, onVideoSelect }) => {
  console.clear();
  console.log("video", video);
  return (
    <div
      className="w-96 ml-5 my-5 "
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt="merjaa"
        height={video.snippet.thumbnails.medium.height}
        width={video.snippet.thumbnails.medium.width}
      />
    </div>
  );
};

export default RecommendVideo;
