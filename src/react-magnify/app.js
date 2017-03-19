import React from 'react';
import Magnify from 'react-magnify';
import '../../node_modules/react-magnify/lib/react-magnify.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        width:'500px',
        margin:'auto'
      }}>
        <h1>It Works with react-magnify</h1>
        <br/>
        <br/>
        <br/>
        <Magnify style={{
          width:'200px'
        }} src="http://thecodeplayer.com/uploads/media/iphone.jpg"></Magnify>
      </div>
    )
  }
}
