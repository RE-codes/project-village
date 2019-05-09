import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input
} from 'reactstrap';

class SignUp extends Component {
  state = {
    modal: this.props.initialModalState,
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitClick = event => {
    const { name, email, password, password2 } = this.state;

    event.preventDefault();

    let newUser = {};

    if (name && email && password && password2 && password === password2) {
      newUser = {
        name,
        email,
        password
      };
    }

    console.log('newUser = ', newUser);

    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <Button
          outline
          color="primary"
          size="lg"
          className="m-3 rounded-button"
          onClick={this.toggle}
        >
          Sign Up
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
          <ModalHeader toggle={this.toggle}>
            <span className="h3">Sign Up for a New Account</span>
          </ModalHeader>
          <Form>
            <ModalBody>
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
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="rounded-button"
                onClick={this.onSubmitClick}
              >
                Submit
              </Button>{' '}
              <Button
                color="secondary"
                className="rounded-button"
                onClick={this.toggle}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SignUp;
