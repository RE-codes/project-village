import { GET_POSTS, ADD_POST, ADD_COMMENT } from '../actions/types';

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
    default:
      return state;
  }
};
