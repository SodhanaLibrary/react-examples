import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import './phone-number.css';
import React from 'react';
import CallingCodes from './CallingCodes';
import {FormControl} from 'react-bootstrap';
import Select from 'react-select';
import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country:'',
      number:'',
      message:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
  }

  onChange(event) {
    this.setState({
      number:event.target.value
    });
    this.validatePhoneNumber('+'+this.state.country+' '+event.target.value);
  }

  onSelect2(cntrObj) {
    this.setState({
      country:cntrObj.value
    });
    this.validatePhoneNumber('+'+cntrObj.value+' '+this.state.number);
  }

  validatePhoneNumber(phoneNumber) {
    /*
    Phone number validation using google-libphonenumber
    */
    let valid = false;
    try {
      const phoneUtil = PhoneNumberUtil.getInstance();
      valid =  phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber));
    } catch(e) {
      valid = false;
    }
    if(valid) {
      this.setState({
        message:'Phone number '+this.getValidNumber(phoneNumber)+' is valid',
        color:'green'
      });
    } else {
      this.setState({
        message:'Phone number '+phoneNumber+' is not valid',
        color:'red'
      });
    }
  }

  getValidNumber(phoneNumber) {
    const phoneUtil = PhoneNumberUtil.getInstance();
    const parsedNumber = phoneUtil.parse(phoneNumber);
    return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL)
  }

  render() {
    return (
      <div>
        <h1>Phone number with country codes using ReactJS</h1>
        <div className="phone-number" style={{display:'flex'}}>
          <div className="phone-number--country">
            <Select value={this.state.country} onChange={this.onSelect2} placeholder="country code"
               options={CallingCodes} labelKey="country" valueKey="value" valueRenderer={(country) => country.value}>
            </Select>
          </div>
          <div className="phone-number--number">
            <FormControl value={this.state.number} onChange={this.onChange} placeholder="phone number">
            </FormControl>
          </div>
        </div>
        <div className="message" style={{color:this.state.color}}>
          {this.state.message}
        </div>
      </div>
    )
  }
}
