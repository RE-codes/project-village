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
    email: '',
    password: ''
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
    const { email, password } = this.state;

    event.preventDefault();

    let loggedUser = {};

    if (email && password) {
      loggedUser = {
        email,
        password
      };
    }

    console.log('loggedUser = ', loggedUser);

    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <Button
          outline
          color="secondary"
          size="lg"
          className="m-3 rounded-button"
          onClick={this.toggle}
        >
          Login
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
          <ModalHeader toggle={this.toggle}>
            <span className="h3">Login to Your Account</span>{' '}
          </ModalHeader>
          <ModalBody>
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
                bsSize="lg"
                value={this.state.password}
                onChange={this.onChange}
              />
            </Form>
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
        </Modal>
      </React.Fragment>
    );
  }
}

export default SignUp;
