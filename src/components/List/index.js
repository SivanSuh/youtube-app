import React from "react";
import Card from "../Card";

const List = ({ onVideoSelect, videos }) => {
  return (
    <div className="flex flex-wrap">
      {videos?.map((item) => (
        <Card key={item?.etag} video={item} onVideoSelect={onVideoSelect} />
      ))}
    </div>
  );
};
export default List;
