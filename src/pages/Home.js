import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import { fetchVideo, onSelectVideoItem } from "../store/slice/videoSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { videoList } = useSelector((state) => state.videoSection);
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
      <div className="flex justify-center items-center mb-3">
        <Search onSubmitProps={onSubmit} />
      </div>
      <div className="flex px-5">
        <Sidebar />
        <div className="flex">
          <div className="flex flex-wrap  mx-auto">
            <Link to="/video">
              <List onVideoSelect={onVideoSelect} videos={videoList.items} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
