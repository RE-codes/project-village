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
  Button
} from 'reactstrap';

class CreatePost extends Component {
  render() {
    return (
      <Container>
        <Card className="mb-3 shadow-sm">
          <Row>
            <Col md="12">
              <CardHeader>
                <h4 className="d-inline-block">Create a post...</h4>
              </CardHeader>
              <Form>
                <CardBody>
                  <FormGroup>
                    <Input type="textarea" />
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
