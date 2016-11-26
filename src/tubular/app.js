import React from 'react';
import Tubular from 'react-tubular';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.mute = this.mute.bind(this);
    this.decreaseVolume = this.decreaseVolume.bind(this);
    this.increaseVolume = this.increaseVolume.bind(this);
  }

  playVideo() {
    this.tubular.playVideo();
  }

  pauseVideo() {
    this.tubular.pauseVideo();
  }

  mute() {
    this.tubular.mute();
  }

  decreaseVolume() {
    this.tubular.decreaseVolume();
  }

  increaseVolume() {
    this.tubular.increaseVolume();
  }

  render() {
    return (
      <div>
        <h1>It Works </h1>
        <p>This React project just works with react-tubular</p>
        <h2>Actions</h2>

        <button onClick={this.playVideo}>Play video</button>
        <button onClick={this.pauseVideo}>Pause video</button>
        <button onClick={this.mute}>Mute video</button>
        <button onClick={this.decreaseVolume}>Decrease Volume</button>
        <button onClick={this.increaseVolume}>Increase Volume</button>

        <Tubular
            ratio = {16/9} // usually either 4/3 or 16/9 -- tweak as needed
            videoId = {'ZCAnLxRvNNc'} // toy robot in space is a good default, no?
            mute = {true}
            repeat = {true}
            width = {window.innerWidth}
            wrapperZIndex = { -1 }
            increaseVolumeBy = { 10 }
            start = { 0 }
            ref={(ref)=>{this.tubular = ref}}/>

      </div>
    )
  }
}
