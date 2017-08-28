import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;


/// Converts state objects to new state with ... spread operator
const newState = (...stateObjects) => {
  return Object.assign({}, ...stateObjects);
};


/// Reducer function
export function postReducer(state: Post, action: Action) {

  switch (action.type) {

    case PostActions.GET_POST:
      return newState(state, { loading: true });

    case PostActions.GET_POST_SUCCESS:
      return newState(state, action.payload, { loading: false } );

    case PostActions.VOTE_UPDATE:
      return newState(state, action.payload, { loading: true } );

    case PostActions.VOTE_SUCCESS:
      return newState(state, { loading: false });

    case PostActions.VOTE_FAIL:
      return newState(state, action.payload, { loading: false });

    default:
      return state;

  }
}
