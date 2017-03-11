import React from 'react';
import TextOverflowTooltip from 'react-text-overflow-tooltip';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/react-text-overflow-tooltip/lib/react-text-overflow-tooltip.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>It Works </h1>
        <p>Mouser hover on below text</p>
        <TextOverflowTooltip maxWidth="100px">give some overflow text here</TextOverflowTooltip>
      </div>
    )
  }
}
