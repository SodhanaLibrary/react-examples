import React from 'react';
import './app.css';
import classNames from 'classNames';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.state = {
      animate:false
    }
  }

  animate() {
    this.setState({
      animate:!this.state.animate
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.animate}>Animate</button>
        <div style={{
          height:this.state.animate ? '0px':'71px'
        }} className={classNames({"parent--fold":this.state.animate}, "parent")}>
         <div className="child">
            <div>Hi this is sample text</div>
            <br/>
            <br/>
            <div>Hi this is sample text</div>
         </div>
        </div>
      </div>
    )
  }
}
