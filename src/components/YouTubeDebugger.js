import React from 'react'

export default class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleClickBit = () => {
    let newState = this.state.settings;
    newState.bitrate = 12;
    this.setState({settings: newState})
    console.log(this.state);
  }

  handleClickRes = () => {
    let newState = this.state.settings;
    newState.video.resolution = '720p';
    this.setState({settings: newState})
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleClickBit}>Bit Rate {this.state.settings.bitrate} </button>
        <button className="resolution" onClick={this.handleClickRes}>Resolution {this.state.settings.video.resolution} </button>
      </div>

    )
  }
}
