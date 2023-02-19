import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";
import List from "../components/List";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import Player from "../Player";

const HomePage = () => {
  const [searchApi, setSearchApi] = useState({
    videos: [],
    selectVideo: null,
  });

  useEffect(() => {
    onSubmit("teen wolf");
  }, []);

  const onSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setSearchApi({
      videos: response?.data?.items,
      selectVideo: response?.data?.items[0],
    });
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
        <>
          <div className="grid grid-rows-5 grid-flow-col gap-3  max-w-7xl mx-auto">
            <List onVideoSelect={onVideoSelect} videos={searchApi.videos} />
          </div>
          <div className="container mx-auto">
            <Player video={searchApi.selectVideo} />
          </div>
        </>
      </div>
    </>
  );
};

export default HomePage;
