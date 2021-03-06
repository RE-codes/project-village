import {
  SET_CURRENT_USER,
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_LIKE
} from './types';
import axios from 'axios';

export const signUp = (newUser, history) => dispatch => {
  axios
    .post('/api/users/signup', newUser)
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch(setCurrentUser(res.data));
      history.push('/news-feed');
    })
    .catch(err => console.error(err));
};

export const login = (loggedUser, history) => dispatch => {
  axios
    .post('/api/users/login', loggedUser)
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch(setCurrentUser(res.data));
      history.push('/news-feed');
    })
    .catch(err => console.error(err));
};

export const logoutCurrentUser = () => dispatch => {
  localStorage.removeItem('user');

  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

export const setCurrentUser = user => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  });
};

export const getAllPosts = () => dispatch => {
  axios
    .get('/api/posts')
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const addPost = post => dispatch => {
  axios
    .post('/api/posts', post)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const deletePost = postId => dispatch => {
  axios
    .delete(`/api/posts/${postId}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const addComment = (comment, postId) => dispatch => {
  axios
    .post(`/api/posts/comment/${postId}`, comment)
    .then(res => {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res => {
      dispatch({
        type: DELETE_COMMENT,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const addLike = (postId, userId) => dispatch => {
  axios
    .post(`/api/posts/like/${postId}/${userId}`)
    .then(res => {
      dispatch({
        type: ADD_LIKE,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};
