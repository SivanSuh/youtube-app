import Search from "../components/Search";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const { videoSelect } = useSelector((state) => state.videoSection);
  const navigate = useNavigate();

  return (
    <>
      {videoSelect ? (
        <div>
          <Search />
          <div className="flex px-5">
            <Sidebar />
            <div className="w-[600px]">
              <div className=" h-[400px]">
                <iframe
                  title={videoSelect.snippet.title}
                  src={`https://www.youtube.com/embed/${videoSelect.id.videoId}?autoplay=1`}
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <h1 className="my-2">{videoSelect.snippet.title}</h1>
              <p>{videoSelect.snippet.description}</p>
              <p>
                {new Date(videoSelect.snippet.publishTime).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default VideoPage;
