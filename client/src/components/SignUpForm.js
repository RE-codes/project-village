import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

export class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
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
          type="text"
          name="name"
          placeholder="Name"
          className="mb-2"
          bsSize="lg"
          value={this.state.name}
          onChange={this.onChange}
        />
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
        <Input
          type="password"
          name="password2"
          placeholder="Confirm password"
          bsSize="lg"
          value={this.state.password2}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

export default SignUpForm;
