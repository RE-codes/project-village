import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button
} from 'reactstrap';

class CreatePost extends Component {
  state = {
    title: '',
    text: '',
    childcare: false,
    petcare: false,
    household: false,
    transportation: false,
    questions: false,
    other: false,
    isInvalid: {
      title: false,
      text: false
    },
    errorMsg: {
      title: '',
      text: ''
    }
  };

  onChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  onClearClick = () => {
    //Reset State
    this.setState({
      title: '',
      text: '',
      childcare: false,
      petcare: false,
      household: false,
      transportation: false,
      questions: false,
      other: false,
      isInvalid: {
        title: false,
        text: false
      },
      errorMsg: {
        title: '',
        text: ''
      }
    });
  };

  onSubmitClick = event => {
    event.preventDefault();

    const {
      text,
      title,
      childcare,
      petcare,
      household,
      transportation,
      questions,
      other
    } = this.state;

    const interests = [];

    if (childcare) {
      interests.push('childcare');
    }
    if (petcare) {
      interests.push('petcare');
    }
    if (household) {
      interests.push('household');
    }
    if (transportation) {
      interests.push('transportation');
    }
    if (questions) {
      interests.push('questions');
    }
    if (other) {
      interests.push('other');
    }

    let post = {
      title,
      text,
      interests
    };

    if (this.validated(post)) {
      // Submit Form
      console.log('submitted!', post);

      //Reset State
      this.setState({
        title: '',
        text: '',
        childcare: false,
        petcare: false,
        household: false,
        transportation: false,
        questions: false,
        other: false,
        isInvalid: {
          title: false,
          text: false
        },
        errorMsg: {
          title: '',
          text: ''
        }
      });
    } else {
      return;
    }
  };

  validated = formData => {
    const { text, title } = formData;

    if (!title) {
      this.setState({
        isInvalid: {
          title: true
        },
        errorMsg: {
          title: 'Title field is required'
        }
      });
      return false;
    } else if (!text) {
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
      <Card className="my-3 shadow-sm">
        <Row>
          <Col md="12">
            <CardHeader>
              <h4 className="d-inline-block">Create a post...</h4>
            </CardHeader>
            <Form onSubmit={this.onSubmitClick}>
              <CardBody>
                <FormGroup>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Title or subject"
                    value={this.state.title}
                    onChange={this.onChange}
                    style={{ fontSize: '1.2rem' }}
                    invalid={this.state.isInvalid.title}
                  />
                  <FormFeedback>{this.state.errorMsg.title}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="text"
                    placeholder="Enter text..."
                    value={this.state.text}
                    onChange={this.onChange}
                    style={{ fontSize: '1.2rem' }}
                    invalid={this.state.isInvalid.text}
                  />
                  <FormFeedback>{this.state.errorMsg.text}</FormFeedback>
                </FormGroup>
                <p className="lead">What would you like to post about today?</p>
                <FormGroup check inline>
                  <Label check className="h6 mr-2">
                    <Input
                      type="checkbox"
                      name="childcare"
                      checked={this.state.childcare}
                      onChange={this.onChange}
                    />
                    Childcare/Babysitting
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check className="h6 mr-2">
                    <Input
                      type="checkbox"
                      name="petcare"
                      checked={this.state.petcare}
                      onChange={this.onChange}
                    />
                    Pet Care
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check className="h6 mr-2">
                    <Input
                      type="checkbox"
                      name="household"
                      checked={this.state.household}
                      onChange={this.onChange}
                    />
                    Household
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check className="h6 mr-2">
                    <Input
                      type="checkbox"
                      name="transportation"
                      checked={this.state.transportation}
                      onChange={this.onChange}
                    />
                    Transportation
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check className="h6 mr-2">
                    <Input
                      type="checkbox"
                      name="questions"
                      checked={this.state.questions}
                      onChange={this.onChange}
                    />
                    Questions
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check className="h6 mr-2">
                    <Input
                      type="checkbox"
                      name="other"
                      checked={this.state.other}
                      onChange={this.onChange}
                    />
                    Other/Misc.
                  </Label>
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
    );
  }
}

export default CreatePost;
