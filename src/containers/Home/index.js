import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import Thumbnail from "../../components/Thumbnail";
import { fetchVideosData, removeData } from "./store/actions";
import { getVideoSelector } from "./store/reducer";
import VideoModal from "../../components/VideoModal";

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector(getVideoSelector);

  const [isOpen, setOpen] = useState(false);
  const [modalDesc, setModalDesc] = useState(false);
  const [modalVideo, setModalVideo] = useState(false);
  const [searchVideos, setSearchVideos] = useState(null);

  useEffect(() => {
    dispatch(fetchVideosData());
  }, []);

  return (
    <>
      <VideoModal
        isOpen={isOpen}
        ariaHideApp={false}
        onClose={() => setOpen(false)}
        modalValue={modalDesc}
        modalVideo={modalVideo}
      />
      <Header
        onChange={(event) => {
          setSearchVideos(event.target.value);
        }}
      />

      <div className="container-fluid">
        <div className="row">
          {videos
            ?.filter((val) => {
              if (searchVideos === null) {
                return val;
              } else if (val.description.toLowerCase().includes(searchVideos)) {
                return val;
              }
            })
            .map((val) => (
              <Thumbnail
                src={val.assets.preview_jpg.url}
                videoLink={val.assets.thumb_mp4.url}
                descriptions={val.description}
                id={val.id}
                key={val.id}
                onClick={() => {
                  setOpen(true);
                  setModalDesc(val.description);
                  setModalVideo(val.assets.thumb_mp4.url);
                }}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
