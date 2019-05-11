import React, { Component } from 'react';
import Comment from './Comment';
import Moment from 'moment';
import Collapse from 'react-collapse';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Form,
  Input,
  Button
} from 'reactstrap';

class Post extends Component {
  state = {
    text: '',
    isOpened: false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onCommentsClick = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  onClearClick = () => {
    // reset state
    this.setState({
      text: ''
    });
  };

  onCommentSubmitClick = event => {
    event.preventDefault();

    const newComment = {
      text: this.state.text,
      date: Date.now()
    };

    if (newComment.text) {
      // submit new comment
      console.log('submitted! ', newComment);
      // reset state
      this.setState({
        text: ''
      });
    }
  };

  render() {
    const { post } = this.props;
    return (
      <React.Fragment>
        <Card className="post mt-3 shadow-sm">
          <Row>
            <Col md="12">
              <CardHeader>
                <div className="float-right">
                  {post.categories.includes('childcare') && (
                    <i
                      className="fas fa-child ml-3 text-info"
                      title="Childcare"
                    />
                  )}
                  {post.categories.includes('petcare') && (
                    <i
                      className="fas fa-dog ml-3 text-active"
                      title="Pet Care"
                    />
                  )}
                  {post.categories.includes('household') && (
                    <i
                      className="fas fa-home ml-3 text-success"
                      title="Household"
                    />
                  )}
                  {post.categories.includes('transportation') && (
                    <i
                      className="fas fa-car-side ml-3 text-danger"
                      title="Transportation"
                    />
                  )}
                  {post.categories.includes('questions') && (
                    <i
                      className="fas fa-question ml-3 text-warning"
                      title="Question"
                    />
                  )}
                  {post.categories.includes('other') && (
                    <i
                      className="fas fa-asterisk ml-3 text-dark"
                      title="Other/Misc."
                    />
                  )}
                </div>
                <p className="text-primary">
                  posted on: {Moment(post.date).format('LL')}
                </p>
                <h5 className="d-inline-block">{post.user} says:</h5>
                <p className="text-secondary float-right d-inline-block">
                  Village {post.rank}
                </p>
              </CardHeader>
              <CardBody>
                <CardText className="post lead">{post.text}</CardText>
              </CardBody>
              <CardFooter>
                <Button color="light" className="like">
                  <i className="fas fa-thumbs-up text-primary" />
                  <span className="badge badge-light ml-1">
                    {post.likes.length || null}
                  </span>
                </Button>
                <div className="pt-2 float-right">
                  <Button
                    className="btn btn-secondary text-primary bg-transparent comments-button border-0"
                    onClick={this.onCommentsClick}
                  >
                    Comments
                  </Button>
                </div>
              </CardFooter>
            </Col>
          </Row>
        </Card>
        {/* comments section */}
        <Collapse isOpened={this.state.isOpened}>
          <Card className="comment">
            <Row>
              <Col md="12">
                <CardBody className="comment-divider">
                  <Form onSubmit={this.onCommentSubmitClick}>
                    <Input
                      type="text"
                      name="text"
                      placeholder="Leave a reply..."
                      value={this.state.text}
                      onChange={this.onChange}
                      className="mb-3"
                    />
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
                  </Form>
                </CardBody>
                {this.props.post.comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
              </Col>
            </Row>
          </Card>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Post;
