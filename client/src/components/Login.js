import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import LoginForm from './LoginForm';

class SignUp extends Component {
  state = {
    modal: this.props.initialModalState
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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
            <LoginForm />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              className="rounded-button"
              onClick={this.toggle}
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
