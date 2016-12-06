import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TweetParser from 'react-tweet-parser';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textVal:'Hi @SodhanaLibrary,This is sample tag #ReactJS, this is sample URL https://blog.sodhanalibrary.com/2016/12/react-gif-preview-react-library-to-make.html'
    }
  }

  onChange(event) {
    this.setState({
      textVal:event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>It Works with react-tweet-parser</h1>
        <p>Enter tweet in below text area</p>
        <textarea cols="80" rows="4" onChange={this.onChange.bind(this)} value={this.state.textVal}></textarea>
        <br/>
        <br/>
        <h2>Parsed Tweet</h2>
        <TweetParser>{this.state.textVal}</TweetParser>
      </div>
    )
  }
}
