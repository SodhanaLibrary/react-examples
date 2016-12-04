import 'bootstrap/dist/css/bootstrap.min.css';
import gifStyles from '../../node_modules/react-gif-preview/lib/react-gif-preview.css';
import React from 'react';
import GifPreview from 'react-gif-preview';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works  with react-gif-preview</h1>
        <GifPreview src="http://demo.sodhanalibrary.com/angular/gif_preview/jqGifPreview/sample_first_frame.png"  gifSrc="http://demo.sodhanalibrary.com/angular/gif_preview/jqGifPreview/sample_giphy.gif"/>
      </div>
    )
  }
}
