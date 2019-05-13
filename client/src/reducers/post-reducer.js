import {
  GET_POSTS,
  ADD_POST,
  ADD_COMMENT,
  DELETE_POST
} from '../actions/types';

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case ADD_POST:
      return {
        posts: [action.payload, ...state.posts]
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: action.payload
      };
    case DELETE_POST:
      const newState = state.posts.filter(
        post => post._id !== action.payload._id
      );
      return {
        ...state,
        posts: newState
      };
    default:
      return state;
  }
};
