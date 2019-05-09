import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SignUpForm } from './SignUpForm';

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
          <ModalBody>
            <SignUpForm />
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
