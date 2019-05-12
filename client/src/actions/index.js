import { SET_CURRENT_USER, GET_POSTS, ADD_POST, ADD_COMMENT } from './types';
import db from '../fake-db';

export const login = loggedUser => dispatch => {
  const existingUser = db.users.find(user => loggedUser.email === user.email);
  if (!existingUser) {
    return;
  }

  if (existingUser.password === loggedUser.password) {
    dispatch({
      type: SET_CURRENT_USER,
      payload: existingUser
    });
  }
};

export const logoutCurrentUser = () => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

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
