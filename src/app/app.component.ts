import { Component, OnInit } from '@angular/core';

import { Store }        from '@ngrx/store';
import { Observable }   from 'rxjs/Observable';

import { Post }         from './models/post.model';
import * as postActions from './actions/post.actions';

import { User }         from './models/user.model';
import * as userActions from './actions/user.actions';

interface AppState {
  post: Post;
  user: User;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  post$: Observable<Post>;
  user$: Observable<User>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.post$ = this.store.select('post');
    this.user$ = this.store.select('user');

    this.store.dispatch(new userActions.GetUser());
  }

  googleLogin() {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }

  getPost() {
    this.store.dispatch(new postActions.GetPost('/posts/testPost'));
  }

  vote(post: Post, val: number) {
    this.store.dispatch(new postActions.VoteUpdate({ post, val }));
  }


}
