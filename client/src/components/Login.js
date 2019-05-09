import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  FormFeedback,
  Input
} from 'reactstrap';

class SignUp extends Component {
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
    },
    validated: false
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

    let loggedUser = {
      email,
      password
    };

    // Form validation
    this.validateForm(loggedUser);

    if (this.state.validated === true) {
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
    }
  };

  validateForm = formData => {
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
    } else if (!email.match(mailFormat)) {
      this.setState({
        isInvalid: {
          email: true
        },
        errorMsg: {
          email: 'Email is invalid, please enter a valid email address'
        }
      });
    } else if (!password) {
      this.setState({
        isInvalid: {
          password: true
        },
        errorMsg: {
          password: 'Password field is required'
        }
      });
    } else {
      // set validated to true
      this.setState({ validated: true });
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
            <Form>
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
              <FormGroup className="mb-0">
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
