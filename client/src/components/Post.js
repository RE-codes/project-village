import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Button
} from 'reactstrap';

class Post extends Component {
  state = {
    post: {
      username: 'Rich',
      text: 'This is a post. It says stuff and things.',
      rank: 'Rockstar'
    }
  };

  render() {
    const { post } = this.state;
    return (
      <Container>
        <Card className="mb-3 shadow-sm">
          <Row>
            <Col md="12">
              <CardHeader>
                <h5 className="d-inline-block">{post.username} says:</h5>
                <p className="text-secondary float-right d-inline-block">
                  Village {post.rank}
                </p>
              </CardHeader>
              <CardBody>
                <CardText className="lead">{post.text}</CardText>
              </CardBody>
              <CardFooter>
                <Button color="light" className="like">
                  <i className="fas fa-thumbs-up text-primary" />
                </Button>
                <Button color="light" className="unlike">
                  <i className="fas fa-thumbs-down text-danger" />
                </Button>
                <div className="float-right">
                  <a href="/news-feed" className="mx-3">
                    Reply
                  </a>{' '}
                  <a href="/news-feed">See comments</a>
                </div>
              </CardFooter>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default Post;
