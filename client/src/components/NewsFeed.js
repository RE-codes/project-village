import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Post from './Post';
import CreatePost from './CreatePost';

class NewsFeed extends Component {
  render() {
    return (
      <Container>
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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsFeed;
