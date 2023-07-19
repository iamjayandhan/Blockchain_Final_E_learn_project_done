import './courses.css';

function VideoModal({ videoUrl, onClose }) {
    return (
      <div className="video-modal">
        <div className="video-modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default VideoModal;
  