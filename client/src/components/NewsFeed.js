import React, { Component } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

class NewsFeed extends Component {
  render() {
    return (
      <div className="news-feed">
        <CreatePost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default NewsFeed;
