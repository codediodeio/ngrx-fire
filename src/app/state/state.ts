import {Post} from './posts';
import {User} from './users';

export interface AppState {
  post: Post;
  user: User;
}
