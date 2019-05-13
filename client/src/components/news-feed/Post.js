import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  Input,
  Button
} from 'reactstrap';
import { addComment, getAllPosts, deletePost } from '../../actions';

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

  onCommentSubmitClick = async postId => {
    const { name, id } = this.props.user.user;
    const newComment = {
      user: id,
      name,
      text: this.state.text
    };

    if (newComment.text) {
      // submit new comment
      await this.props.addComment(newComment, postId);

      // reset state
      this.setState({
        text: ''
      });
    }
  };

  onDeleteClick = postId => {
    this.props.deletePost(postId);
  };

  render() {
    const { post } = this.props;
    const firstName = post.name ? post.name.split(' ')[0] : 'User';
    return (
      <React.Fragment>
        <Card className="post mt-3 shadow-sm">
          <Row>
            <Col md="12">
              <CardHeader>
                <div className="float-right">
                  {post.categories.includes('Childcare') && (
                    <i
                      className="fas fa-child fa-2x ml-3 text-info"
                      title="Childcare"
                    />
                  )}
                  {post.categories.includes('Pet Care') && (
                    <i
                      className="fas fa-dog fa-2x ml-3 text-active"
                      title="Pet Care"
                    />
                  )}
                  {post.categories.includes('Household') && (
                    <i
                      className="fas fa-home fa-2x ml-3 text-success"
                      title="Household"
                    />
                  )}
                  {post.categories.includes('Transportation') && (
                    <i
                      className="fas fa-car-side fa-2x ml-3 text-danger"
                      title="Transportation"
                    />
                  )}
                  {post.categories.includes('Questions') && (
                    <i
                      className="fas fa-question fa-2x ml-3 text-warning"
                      title="Question"
                    />
                  )}
                  {post.categories.includes('Other') && (
                    <i
                      className="fas fa-asterisk fa-2x ml-3 text-dark"
                      title="Other/Misc."
                    />
                  )}
                </div>
                <p className="text-primary small post-date">
                  posted on: {Moment(post.date).format('LL')}
                </p>
                <p className="text-secondary float-right d-inline-block post-rank">
                  Village {post.rank ? post.rank : 'Member'}
                </p>
                <p className="d-inline-block post-name">{firstName} says:</p>
                <h5 className="pl-4 pt-1 post-title">{post.title}</h5>
              </CardHeader>
              <CardBody>
                <CardText className="post-text lead">{post.text}</CardText>
              </CardBody>
              <CardFooter>
                <Button color="light" className="like">
                  <i className="fas fa-thumbs-up text-primary" />
                  <span className="badge badge-light ml-1">
                    {post.likes ? post.likes.length : null}
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
                {post.user === this.props.user.user.id ? (
                  <div className="pt-2 float-right">
                    <Button
                      className="btn btn-secondary text-danger bg-transparent comments-button border-0"
                      onClick={this.onDeleteClick.bind(this, post._id)}
                    >
                      Delete Post
                    </Button>
                  </div>
                ) : null}
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
                  <Input
                    type="text"
                    name="text"
                    placeholder="Leave a reply..."
                    value={this.state.text}
                    onChange={this.onChange}
                    className="mb-3"
                  />
                  <Button
                    type="button"
                    size="sm"
                    color="primary"
                    className="rounded-button mr-2"
                    onClick={this.onCommentSubmitClick.bind(this, post._id)}
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
                </CardBody>
                {this.props.post.comments
                  ? this.props.post.comments.map((comment, index) => (
                      <Comment key={comment._id} comment={comment} />
                    ))
                  : null}
              </Col>
            </Row>
          </Card>
        </Collapse>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addComment, getAllPosts, deletePost }
)(Post);
