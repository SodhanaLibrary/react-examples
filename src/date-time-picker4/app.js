import React from 'react';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import DateTimePicker from 'react-bootstrap-date-time-picker';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/react-bootstrap-date-time-picker/lib/react-bootstrap-date-time-picker.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timeOnly: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  handleChange(value) {
   this.setState({
     date: value
   });
  }

  handleFormatChange(e) {
   this.setState({
     format: e.target.value
   });
  }

  onCheck(event) {
    this.setState({
      timeOnly:!this.state.timeOnly
    });
  }

  render() {
    const fromValue = new Date();
    fromValue.setHours(0);
    fromValue.setMinutes(0);
    fromValue.setSeconds(0);
    const toValue = new Date();
    toValue.setHours(23);
    toValue.setMinutes(59);
    toValue.setSeconds(59);
    return (
      <div style={{
        width:'500px',
        margin:'auto',
        paddingTop:'100px'
      }}>
        <FormGroup controlId="change_handler">
          <ControlLabel>Change Handler</ControlLabel>
          <DateTimePicker
             timeOnly={this.state.timeOnly}
             from={fromValue}
             to={toValue}
             onChange={this.handleChange}
             dateFormat="hh:mm:ss A"
             placeholder="Placeholder"
             value={this.state.date}
             id="change_handler_example" />
          <HelpBlock>Help</HelpBlock>
        </FormGroup>
        <div className="form-group">
          <label>
            <input type="radio"  value="timeOnly"  checked={this.state.timeOnly} name="calendar" onClick={this.onCheck.bind(this)}></input>
            &nbsp;Time only
          </label>
        </div>
        </div>
    )
  }
}
