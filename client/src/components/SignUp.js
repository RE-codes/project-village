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
    name: '',
    email: '',
    password: '',
    password2: '',
    isInvalid: {
      name: false,
      email: false,
      password: false,
      password2: false
    },
    errorMsg: {
      name: '',
      email: '',
      password: '',
      password2: ''
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
    const { name, email, password, password2 } = this.state;

    event.preventDefault();

    let newUser = {
      name,
      email,
      password,
      password2
    };

    // Form validation
    this.validateForm(newUser);

    if (this.state.validated === true) {
      // Submit Form
      console.log('submitted!', newUser);

      this.toggle();

      //Reset State
      this.setState({
        name: '',
        email: '',
        password: '',
        password2: '',
        isInvalid: {
          name: false,
          email: false,
          password: false,
          password2: false
        },
        errorMsg: {
          name: '',
          email: '',
          password: '',
          password2: ''
        }
      });
    }
  };

  validateForm = formData => {
    const { name, email, password, password2 } = formData;

    //Regex to validate email structure
    // eslint-disable-next-line no-useless-escape, prettier/prettier
    const mailFormat = /\S+@\S+\.\S+/;

    if (!name) {
      this.setState({
        isInvalid: {
          name: true
        },
        errorMsg: {
          name: 'Name field is required'
        }
      });
    } else if (!email) {
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
    } else if (!password2) {
      this.setState({
        isInvalid: {
          password2: true
        },
        errorMsg: {
          password2: 'Confirm password field is required'
        }
      });
    } else if (password2 !== password) {
      this.setState({
        isInvalid: {
          password2: true
        },
        errorMsg: {
          password2: 'Passwords do not match'
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
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="mb-2"
                  bsSize="lg"
                  value={this.state.name}
                  onChange={this.onChange}
                  invalid={this.state.isInvalid.name}
                />
                <FormFeedback>{this.state.errorMsg.name}</FormFeedback>
              </FormGroup>
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
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="mb-2"
                  bsSize="lg"
                  value={this.state.password}
                  onChange={this.onChange}
                  invalid={this.state.isInvalid.password}
                />
                <FormFeedback>{this.state.errorMsg.password}</FormFeedback>
              </FormGroup>
              <FormGroup className="mb-0">
                <Input
                  type="password"
                  name="password2"
                  placeholder="Confirm password"
                  bsSize="lg"
                  value={this.state.password2}
                  onChange={this.onChange}
                  invalid={this.state.isInvalid.password2}
                />
                <FormFeedback>{this.state.errorMsg.password2}</FormFeedback>
              </FormGroup>
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
