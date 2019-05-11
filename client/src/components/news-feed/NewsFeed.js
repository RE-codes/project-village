import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'reactstrap';
import Post from './Post';
import CreatePost from './CreatePost';

class NewsFeed extends Component {
  state = {
    posts: [
      {
        id: 1,
        user: 'Rich',
        text: 'This is a post. It says stuff and things.',
        categories: [
          'childcare',
          'petcare',
          'household',
          'transportation',
          'questions',
          'other'
        ],
        rank: 'Member',
        date: Date.now(),
        likes: [
          /* an array of user id's */
        ],
        comments: [
          {
            text: 'This is a comment. It says stuff, too.',
            user: 'April',
            date: Date.now()
          },
          {
            text: 'This is a comment. It says stuff, too.',
            user: 'Rich',
            date: Date.now()
          }
        ]
      },
      {
        id: 2,
        user: 'April',
        text: 'This is a post. It says stuff and things.',
        categories: ['childcare', 'petcare', 'transportation'],
        rank: 'Rockstar',
        date: Date.now(),
        likes: [1, 2, 3],
        comments: [
          {
            text: 'This is a comment. It says stuff, too.',
            user: 'April',
            date: Date.now()
          },
          {
            text: 'This is a comment. It says stuff, too.',
            user: 'Rich',
            date: Date.now()
          }
        ]
      },
      {
        id: 3,
        user: 'Harrison',
        text: 'This is a post. It says stuff and things.',
        categories: ['questions', 'other'],
        rank: 'Youngster',
        date: Date.now(),
        likes: [1, 2],
        comments: [
          {
            text: 'Go to bed!',
            user: 'April',
            date: Date.now()
          },
          {
            text: 'You heard your mother!',
            user: 'Rich',
            date: Date.now()
          }
        ]
      }
    ]
  };

  render() {
    return (
      <Container className="pb-3">
        <Row>
          <Col lg={3} className="sidebar mb-3">
            <p className="lead mt-2">Filter posts by category</p>
            <Button className="sidebar-button">Childcare</Button>
            <Button className="sidebar-button">Pet Care</Button>
            <Button className="sidebar-button">Household</Button>
            <Button className="sidebar-button">Transportation</Button>
            <Button className="sidebar-button">Questions</Button>
            <Button className="sidebar-button">Other</Button>
          </Col>
          <Col lg={9} className="news-feed">
            <CreatePost />
            <Card className="mt-4 mb-2 p-2 bg-primary text-light shadow-sm text-center feed-header">
              <h3>Project Village Feed</h3>
            </Card>
            {/* Posts go here */}
            {this.state.posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsFeed;
