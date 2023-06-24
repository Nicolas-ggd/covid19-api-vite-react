import { useState } from "react";

// import { Header } from "../header/Header";
import { MainHeader } from "../header/Header";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";

export const Home = ({ themeClass, isDarkMode }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={`w-full h-full bg-grey-50 ${themeClass}`}>
      <MainHeader />
    </div>
  );
};