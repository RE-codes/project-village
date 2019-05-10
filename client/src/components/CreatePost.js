import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  FormFeedback,
  Button
} from 'reactstrap';

class CreatePost extends Component {
  state = {
    text: '',
    isInvalid: {
      text: false
    },
    errorMsg: {
      text: ''
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClearClick = () => {
    //Reset State
    this.setState({
      text: '',
      isInvalid: {
        text: false
      },
      errorMsg: {
        text: ''
      }
    });
  };

  onSubmitClick = event => {
    const { text } = this.state;

    event.preventDefault();

    let post = {
      text
    };

    if (this.validated(post)) {
      // Submit Form
      console.log('submitted!', post);

      //Reset State
      this.setState({
        text: '',
        isInvalid: {
          text: false
        },
        errorMsg: {
          text: ''
        }
      });
    } else {
      return;
    }
  };

  validated = formData => {
    const { text } = formData;

    if (!text) {
      this.setState({
        isInvalid: {
          text: true
        },
        errorMsg: {
          text: 'Text field is required'
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
      <Container>
        <Card className="mb-3 shadow-sm">
          <Row>
            <Col md="12">
              <CardHeader>
                <h4 className="d-inline-block">Create a post...</h4>
              </CardHeader>
              <Form onSubmit={this.onSubmitClick}>
                <CardBody>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="text"
                      value={this.state.text}
                      onChange={this.onChange}
                      style={{ fontSize: '1.2rem', fontWeight: '200' }}
                      invalid={this.state.isInvalid.text}
                    />
                    <FormFeedback>{this.state.errorMsg.text}</FormFeedback>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button
                    size="sm"
                    color="primary"
                    className="rounded-button mr-2"
                  >
                    Submit
                  </Button>
                  <Button
                    size="sm"
                    color="secondary"
                    className="rounded-button"
                    onClick={this.onClearClick}
                  >
                    Clear
                  </Button>
                </CardFooter>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default CreatePost;
