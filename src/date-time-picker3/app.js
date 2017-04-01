import React from 'react';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import DateTimePicker from 'react-bootstrap-date-time-picker';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/react-bootstrap-date-time-picker/lib/react-bootstrap-date-time-picker.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarOnly: true,
      placementTop: false,
      showTodayButton: false,
      showClearButton: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
   this.setState({
     date: value
   });
  }


  onCheck(event) {
    const obj = {};
    obj[event.target.value] = !this.state[event.target.value]
    this.setState(obj);
  }

  render() {
    return (
      <div style={{
        width:'500px',
        margin:'auto',
        paddingTop:'100px'
      }}>
        <FormGroup controlId="change_handler">
          <ControlLabel>Change Handler</ControlLabel>
          <DateTimePicker
            calendarOnly={this.state.calendarOnly}
            calendarPlacement={this.state.placementTop ? "top":"bottom"}
            showTodayButton={this.state.showTodayButton}
            showClearButton={this.props.showClearButton}
            onChange={this.handleChange}
            dateFormat="DD/MM/YYYY hh:mm:ss A"
            placeholder="Placeholder"
            value={this.state.date}
            id="DateTimePickerExample" />
          <HelpBlock>Help</HelpBlock>
        </FormGroup>
        <div className="form-group">
          <label>
            <input type="checkbox" value="calendarOnly"  checked={this.state.calendarOnly} name="calendar" onClick={this.onCheck.bind(this)}></input>
            &nbsp;Calendar only
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox"  value="placementTop"  checked={this.state.placementTop} name="calendar" onClick={this.onCheck.bind(this)}></input>
            &nbsp;Calendar Placement Top
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox"  value="showTodayButton"  checked={this.state.showTodayButton} name="calendar" onClick={this.onCheck.bind(this)}></input>
            &nbsp;Show Today Button
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox"  value="showClearButton"  checked={this.state.showClearButton} name="calendar" onClick={this.onCheck.bind(this)}></input>
            &nbsp;Show Clear Button
          </label>
        </div>
        </div>
    )
  }
}
