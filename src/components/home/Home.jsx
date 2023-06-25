import { MainHeader } from "../header/Header";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";

export const Home = ({ themeClass, isDarkMode }) => {

  return (
    <div className={`w-full h-full bg-grey-50 ${themeClass}`}>
      <MainHeader themeClass={themeClass} isDarkMode={isDarkMode}/>
    </div>
  );
};