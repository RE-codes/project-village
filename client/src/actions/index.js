import { SET_CURRENT_USER, GET_POSTS, ADD_POST, ADD_COMMENT } from './types';
import db from '../fake-db';

export const getAllPosts = () => dispatch => {
  dispatch({
    type: GET_POSTS,
    payload: db.posts
  });
};

export const addPost = post => dispatch => {
  dispatch({
    type: ADD_POST,
    payload: post
  });
};

export const addComment = (comment, postId) => dispatch => {
  let posts = db.posts;

  posts.map(post => {
    if (postId === post.id) {
      // add the comment
      post.comments.push(comment);
    }
    return posts;
  });

  dispatch({
    type: ADD_COMMENT,
    payload: posts
  });
};
