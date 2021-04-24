import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const customStyles = {
  overlay: {
    background: "#1F1F1F77",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    boxShadow: "0px 0px 16px 2px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
  },
};

const VideoModal = (props) => (
  <Modal {...props} style={customStyles}>
    <div className="container-modal">
      <div className="row-modal">
        <div className="col-md-12 p-4 border-bottom">
          <button
            type="button"
            className="close mt-3"
            data-dismiss="modal"
            aria-label="Close"
            onClick={props?.onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="col-md-12 p-3 overFlowScroll">
          <div className="practice-session">
            <ReactPlayer
              url={props.modalVideo}
              volume={0.5}
              controls
              className="react-player"
            />
            <div className="row">
              <p className="p-2">{props.modalValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
);

export default VideoModal;
