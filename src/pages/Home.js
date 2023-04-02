import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import Player from "../Player";
import { fetchVideo, onSelectVideoItem } from "../store/slice/videoSlice";

const HomePage = () => {
  const { videoList, videoSelect } = useSelector((state) => state.videoSection);
  const dispatc = useDispatch();
  console.log("video category", videoList);
  const [searchApi, setSearchApi] = useState({
    videos: [],
    selectVideo: null,
  });

  useEffect(() => {
    onSubmit("teen wolf");
  }, []);

  const onSubmit = async (term) => {
    await dispatc(fetchVideo(term));
  };

  const onVideoSelect = (video) => {
    setSearchApi({ selectVideo: video });

    window.scrollTo(10, 0);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-center items-center mb-3">
        <Search onSubmitProps={onSubmit} />
      </div>
      <div className="flex px-5">
        <Sidebar />
        <div className="flex">
          <div className="flex flex-wrap max-w-7xl mx-auto">
            <List onVideoSelect={onVideoSelect} videos={videoList.items} />
          </div>
          <div className="container mx-auto">
            {searchApi.selectVideo && <Player video={searchApi.selectVideo} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
