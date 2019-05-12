import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  FormFeedback,
  Input
} from 'reactstrap';

class Login extends Component {
  state = {
    modal: this.props.initialModalState,
    email: '',
    password: '',
    isInvalid: {
      email: false,
      password: false
    },
    errorMsg: {
      email: '',
      password: ''
    }
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

  onCancelClick = () => {
    this.toggle();

    //Reset State
    this.setState({
      email: '',
      password: '',
      isInvalid: {
        email: false,
        password: false
      },
      errorMsg: {
        email: '',
        password: ''
      }
    });
  };

  onSubmitClick = event => {
    const { email, password } = this.state;

    event.preventDefault();

    let loggedUser = {
      email,
      password
    };

    if (this.validated(loggedUser)) {
      // Submit Form
      console.log('submitted!', loggedUser);

      this.toggle();

      //Reset State
      this.setState({
        email: '',
        password: '',
        isInvalid: {
          email: false,
          password: false
        },
        errorMsg: {
          email: '',
          password: ''
        }
      });
    } else {
      return;
    }
  };

  validated = formData => {
    const { email, password } = formData;

    //Regex to validate email structure
    // eslint-disable-next-line no-useless-escape, prettier/prettier
    const mailFormat = /\S+@\S+\.\S+/;

    if (!email) {
      this.setState({
        isInvalid: {
          email: true
        },
        errorMsg: {
          email: 'Email field is required'
        }
      });
      return false;
    } else if (!email.match(mailFormat)) {
      this.setState({
        isInvalid: {
          email: true
        },
        errorMsg: {
          email: 'Email is invalid, please enter a valid email address'
        }
      });
      return false;
    } else if (!password) {
      this.setState({
        isInvalid: {
          password: true
        },
        errorMsg: {
          password: 'Password field is required'
        }
      });
      return false;
    } else {
      // set validated to true
      return true;
    }
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
            <Form noValidate>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="mb-2"
                  bsSize="lg"
                  value={this.state.email}
                  onChange={this.onChange}
                  invalid={this.state.isInvalid.email}
                />
                <FormFeedback>{this.state.errorMsg.email}</FormFeedback>
              </FormGroup>
              <FormGroup className="mb-3">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  bsSize="lg"
                  value={this.state.password}
                  onChange={this.onChange}
                  invalid={this.state.isInvalid.password}
                />
                <FormFeedback>{this.state.errorMsg.password}</FormFeedback>
              </FormGroup>
              <hr />
              <FormGroup>
                <Button
                  color="secondary"
                  className="rounded-button float-right"
                  onClick={this.onCancelClick}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  color="primary"
                  className="rounded-button float-right mr-3"
                  onClick={this.onSubmitClick}
                >
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Login;
