import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Card } from 'reactstrap';
import Post from './Post';
import CreatePost from './CreatePost';
import { getAllPosts } from '../../actions';

class NewsFeed extends Component {
  state = {
    sorted: false,
    category: ''
  };

  componentDidMount = () => {
    this.props.getAllPosts();
  };

  sortByCategory = category => {
    if (category !== 'All') {
      this.setState({
        sorted: true,
        category
      });
    } else {
      this.setState({
        sorted: false,
        category: ''
      });
    }
  };

  render() {
    const { posts } = this.props;
    const categories = [
      'All',
      'Childcare',
      'Pet Care',
      'Household',
      'Transportation',
      'Questions',
      'Other'
    ];
    return (
      <Container className="pb-3">
        <Row>
          <Col lg={3} className="sidebar mb-3">
            <p className="lead mt-2">Filter posts by category</p>
            {categories.map(category => (
              <Button
                key={category}
                className="sidebar-button"
                onClick={this.sortByCategory.bind(this, category)}
              >
                {category}
              </Button>
            ))}
          </Col>
          <Col lg={9} className="news-feed">
            <CreatePost />
            <Card className="mt-4 mb-2 p-2 bg-primary text-light shadow-sm text-center feed-header">
              <h3>Project Village Feed</h3>
            </Card>
            {/* Posts go here */}
            {this.state.sorted
              ? posts
                  .filter(post => post.categories.includes(this.state.category))
                  .map(post => <Post key={post.id} post={post} />)
              : posts.map(post => <Post key={post.id} post={post} />)}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  posts: state.post.posts
});

export default connect(
  mapStateToProps,
  { getAllPosts }
)(NewsFeed);