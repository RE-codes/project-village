import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

export class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
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
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2"
          bsSize="lg"
        />
      </Form>
    );
  }
}

export default SignUpForm;
