import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { CardHeader, CardBody, CardText, Button } from 'reactstrap';
import { deleteComment } from '../../actions';

class Comment extends Component {
  onDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId } = this.props;
    const firstName = comment.name ? comment.name.split(' ')[0] : 'User';
    return (
      <React.Fragment>
        <CardHeader>
          {comment.user === this.props.user.user.id ? (
            <div className="pt-2 float-right">
              <Button
                className="btn btn-secondary text-danger bg-transparent comments-button border-0 delete-comment"
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
              >
                <i className="fas fa-times" title="Delete comment" />
              </Button>
            </div>
          ) : null}
          <p className="mb-1 text-primary small">
            replied on: {Moment(comment.date).format('LL')}
          </p>

          <p className="mb-0">{firstName} replied:</p>
        </CardHeader>
        <CardBody className="comment-divider">
          <CardText className="comment-text">{comment.text}</CardText>
        </CardBody>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  post: state.post
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(Comment);
