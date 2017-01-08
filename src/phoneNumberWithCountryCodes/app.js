import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import React from 'react';
import Languages from './Languages';
import {FormControl} from 'react-bootstrap';
import Select from 'react-select';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lang:'EN'
    }
    this.onSelect = this.onSelect.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
  }

  onSelect(event) {
    this.setState({
      lang:event.target.value
    });
  }

  onSelect2(language) {
    this.setState({
      lang:language.code
    });
  }

  render() {
    return (
      <div>
        <h1>Select box for languages</h1>
        <select value={this.state.lang} onChange={this.onSelect}>
           {Languages.map((language) => <option value={language.code}>{language.value}</option>)}
        </select>
        <br/><br/><br/>
        <h1>Bootstrap Select box for languages</h1>
        <FormControl value={this.state.lang} onChange={this.onSelect} componentClass="select" placeholder="select">
          {Languages.map((language) => <option value={language.code}>{language.value}</option>)}
        </FormControl>
        <br/><br/><br/>
        <h1>React Select2 for languages</h1>
        <Select value={this.state.lang} onChange={this.onSelect2} placeholder="select"
           options={Languages} labelKey="value" valueKey="code">
        </Select>
      </div>
    )
  }
}
