import React, { useEffect } from "react";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import RecommendVideo from "../components/RecommendVideo";
import { fetchVideo, onSelectVideoItem } from "../store/slice/videoSlice";

const VideoPage = () => {
  const { videoSelect, videoList } = useSelector((state) => state.videoSection);
  const dispatc = useDispatch();

  useEffect(() => {
    onSubmit("teen wolf");
  }, []);

  const onSubmit = async (term) => {
    await dispatc(fetchVideo(term));
  };
  const onVideoSelect = (video) => {
    dispatc(onSelectVideoItem(video));
    window.scrollTo(10, 0);
  };
  return (
    <>
      <div>
        <Search />
        <div className="flex px-5">
          <Sidebar onSubmitProps={onSubmit} />
          <div className="w-[600px] flex-1">
            <div className=" h-[600px]">
              <iframe
                title={videoSelect.snippet.title}
                src={`https://www.youtube.com/embed/${videoSelect.id.videoId}?autoplay=1`}
                allow="autoplay"
                className="w-full h-full"
              ></iframe>
            </div>
            <h1 className="my-2">{videoSelect.snippet.title}</h1>
            <p>{videoSelect.snippet.description}</p>
            <p>{new Date(videoSelect.snippet.publishTime).toLocaleString()}</p>
          </div>
          <div className="h-[1000px] overflow-x-auto">
            {videoList?.items.map((video) => (
              <RecommendVideo
                video={video}
                key={video.etag}
                onVideoSelect={onVideoSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
