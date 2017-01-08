import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import React from 'react';
import Timezones from './Timezones';
import {FormControl} from 'react-bootstrap';
import Select from 'react-select';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timezone:'America/Aruba'
    }
    this.onSelect = this.onSelect.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
  }

  onSelect(event) {
    this.setState({
      timezone:event.target.value
    });
  }

  onSelect2(language) {
    this.setState({
      timezone:language.value
    });
  }

  render() {
    return (
      <div>
        <h1>Select box for Timezones</h1>
        <select value={this.state.timezone} onChange={this.onSelect}>
           {Timezones.map((timezone) => <option value={timezone.value}>{timezone.name}</option>)}
        </select>
        <br/><br/><br/>
        <h1>Bootstrap Select box for Timezones</h1>
        <FormControl value={this.state.timezone} onChange={this.onSelect} componentClass="select" placeholder="select">
          {Timezones.map((timezone) => <option value={timezone.value}>{timezone.name}</option>)}
        </FormControl>
        <br/><br/><br/>
        <h1>React Select2 for Timezones</h1>
        <Select value={this.state.timezone} onChange={this.onSelect2} placeholder="select"
           options={Timezones} labelKey="name" valueKey="value">
        </Select>
      </div>
    )
  }
}
