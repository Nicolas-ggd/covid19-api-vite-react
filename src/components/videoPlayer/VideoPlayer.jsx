import ReactPlayer from "react-player";

export const VideoPlayer = ({ url, width, height, onLoaded }) => {
    const handleVideoLoaded = () => {
        if (onLoaded) {
          onLoaded();
        }
      };
    
      return (
        <ReactPlayer
          url={url}
          width={width}
          height={height}
          controls
          onReady={handleVideoLoaded}
        />
      );
};