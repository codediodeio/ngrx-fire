import { AppState } from '../state';

import * as PostActions from './post.actions';
import { Post } from './post.model';

export type Action = PostActions.All;

/**
 * Define all store queries for Post(s)
 */
export namespace PostsQuery {
  export const getPost = (state: AppState) => state.post;
}


/// Reducer function
export function postReducer(state: Post, action: Action) {

  switch (action.type) {

    case PostActions.GET_POST:
      return { ...state, loading: true };

    case PostActions.GET_POST_SUCCESS:
      return { ...state, ...action.payload, loading: false };

    case PostActions.VOTE_UPDATE:
      return { ...state, ...action.payload, loading: true };

    case PostActions.VOTE_SUCCESS:
      return { ...state, loading: false };

    case PostActions.VOTE_FAIL:
      return { ...state, ...action.payload, loading: false };

    default:
      return state;

  }
}
