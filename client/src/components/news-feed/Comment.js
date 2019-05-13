import React, { Component } from 'react';
import Moment from 'moment';
import { CardHeader, CardBody, CardText } from 'reactstrap';

class Comment extends Component {
  render() {
    const { comment } = this.props;
    const firstName = comment.name ? comment.name.split(' ')[0] : 'User';
    return (
      <React.Fragment>
        <CardHeader>
          <p className="mb-1 text-primary">
            replied on: {Moment(comment.date).format('LL')}
          </p>
          <p className="lead mb-0">{firstName} replied:</p>
        </CardHeader>
        <CardBody className="comment-divider">
          <CardText className="comment-text">{comment.text}</CardText>
        </CardBody>
      </React.Fragment>
    );
  }
}

export default Comment;
