import {
  GET_POSTS,
  ADD_POST,
  ADD_COMMENT,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_LIKE
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
      const addCommentState = [...state.posts];
      addCommentState.map((post, index) => {
        post._id === action.payload._id
          ? (addCommentState[index] = action.payload)
          : (addCommentState[index] = post);
        return addCommentState;
      });
      return {
        ...state,
        posts: addCommentState
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload._id)
      };
    case DELETE_COMMENT:
      const deleteCommentState = [...state.posts];
      deleteCommentState.map((post, index) => {
        post._id === action.payload._id
          ? (deleteCommentState[index] = action.payload)
          : (deleteCommentState[index] = post);
        return deleteCommentState;
      });
      return {
        ...state,
        posts: deleteCommentState
      };
    case ADD_LIKE:
      const addLikeState = [...state.posts];
      addLikeState.map((post, index) => {
        post._id === action.payload._id
          ? (addLikeState[index] = action.payload)
          : (addLikeState[index] = post);
        return addLikeState;
      });
      return {
        ...state,
        posts: addLikeState
      };
    default:
      return state;
  }
};
