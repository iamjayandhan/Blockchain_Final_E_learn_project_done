import './courses.css';

function VideoModal({ videourl, onClose ,coursename}) {
    return (
      <div className="video-modal">
        <div className="video-modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <iframe
            width="560"
            height="315"
            src={videourl}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>{coursename}</h2>
        </div>
      </div>
    );
  }
  
  export default VideoModal;
  