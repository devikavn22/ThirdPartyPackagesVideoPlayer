import './index.css'

import ReactPlayer from 'react-player'

const videoUrlOne = 'https://youtu.be/XFfzjWCO-SU'
const videoUrlTwo = 'https://youtu.be/wDtt24RxdLk'
const videoUrlThree = 'https://youtu.be/wEL4kSfqISc'
const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url={videoUrlOne} />
      <h1 className="head">Why are NFTs so Ugly?</h1>
      <ReactPlayer url={videoUrlTwo} />
      <h1 className="head">
        5 FREE Play to Earn NFT Games on PC with NO Investment
      </h1>
      <ReactPlayer url={videoUrlThree} />
    </div>
  </div>
)

export default VideoPlayer
