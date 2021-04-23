import React from "react";
import HoverVideoPlayer from "react-hover-video-player";

const Thumbnail = (props) => (
  <div className="column pt-3">
    <div className="card" onClick={props.onClick}>
      <HoverVideoPlayer
        videoSrc={props.videoLink}
        pausedOverlay={<img src={props.src} alt="" style={{ width: "100%" }} />}
        loadingOverlay={<div className="loading-spinner-overlay" />}
        id={props.id}
        style={{ zIndex: "0" }}
      />
      <div className="card-body">
        <p className="card-text wordWrap">{props.descriptions}</p>
      </div>
    </div>
  </div>
);

export default Thumbnail;
