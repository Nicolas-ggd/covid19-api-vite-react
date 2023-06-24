import { DefaultPlayer as Video } from 'react-html5video';
import mediaVideo from '../../video/vajashavela.mp4';
import 'react-html5video/dist/styles.css';

export const VideoPlayer = ({ url, width, height, onLoaded }) => {
  return (
    <Video
    style={{width: width, height: height}}
    autoPlay
    loop
    onCanPlayThrough={() => console.log('video play')}
    >
      <source src={mediaVideo} type="video/webm"/>
    </Video>
  )
};