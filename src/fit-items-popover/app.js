import React from 'react';
import FitItemsPopover from 'react-fit-items-popover';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/react-fit-items-popover/lib/react-fit-items-popover.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>It Works </h1>
        <h3>FitItemsPopover example with popover placement</h3>
        <hr/>
        <FitItemsPopover title="Countries" maxWidth="250px" items={['Iceland','India','Indonesia','Iran','Iraq','Ireland']}></FitItemsPopover>
        <br/>
        <FitItemsPopover title="Countries" maxWidth="100px" items={['Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy']}></FitItemsPopover>
        <hr/>
        <h3>FitItemsPopover example with popover placement</h3>
        <hr/>
        <FitItemsPopover title="Countries" popoverPlacement="right" maxWidth="200px" items={['Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy']}></FitItemsPopover>
      </div>
    )
  }
}
