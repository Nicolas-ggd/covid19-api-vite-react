import { DefaultPlayer as Video } from 'react-html5video';
import mediaVideo from '../../video/vajashavela.mp4';
import 'react-html5video/dist/styles.css';
import { socket } from '../../api/socket';


export const VideoPlayer = ({ width, height }) => {

  const handleTimeUpdate = (event) => {
    const videoElement = event.target;
    const currentTime = videoElement.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    console.log(`Current Time: ${minutes}:${seconds}`);
    socket.emit('join', )
    
  };

  return (
    <Video
    style={{width: width, height: height}}
    loop
    onCanPlayThrough={() => console.log('video play')}
    onTimeUpdate={handleTimeUpdate}
    >
      <source src={mediaVideo} type="video/webm"/>
    </Video>
  )
};