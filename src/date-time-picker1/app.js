import React from 'react';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import DateTimePicker from 'react-bootstrap-date-time-picker';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/react-bootstrap-date-time-picker/lib/react-bootstrap-date-time-picker.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarOnly: true
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
      calendarOnly:!this.state.calendarOnly
    });
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
          <DateTimePicker calendarOnly={this.state.calendarOnly} onChange={this.handleChange} dateFormat="DD/MM/YYYY" placeholder="Placeholder" value={this.state.date} id="change_handler_example" />
          <HelpBlock>Help</HelpBlock>
        </FormGroup>
        <div className="form-group">
          <label>
            <input type="radio"  value="calendarOnly"  checked={this.state.calendarOnly} name="calendar" onClick={this.onCheck.bind(this)}></input>
            &nbsp;Calendar only
          </label>
        </div>
        </div>
    )
  }
}
