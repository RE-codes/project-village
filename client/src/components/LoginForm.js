import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

export class SignUpForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Form>
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          className="mb-2"
          bsSize="lg"
          value={this.state.email}
          onChange={this.onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2"
          bsSize="lg"
          value={this.state.password}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

export default SignUpForm;
