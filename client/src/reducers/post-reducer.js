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
      const newState = [...state.posts];
      newState.map((post, index) => {
        post._id === action.payload._id
          ? (newState[index] = action.payload)
          : (newState[index] = post);
        return newState;
      });
      return {
        ...state,
        posts: newState
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload._id)
      };
    default:
      return state;
  }
};
