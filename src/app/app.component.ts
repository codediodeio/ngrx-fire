import { Component } from '@angular/core';

import { Store }        from '@ngrx/store';
import { Observable }   from 'rxjs/Observable';

import { Post }         from './models/post.model';
import * as postActions from './actions/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  post$: Observable<Post>;

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  getPost() {
    this.store.dispatch(new postActions.GetPost('/posts/testPost'));
  }

  vote(post: Post, val: number) {
    this.store.dispatch(new postActions.VoteUpdate({ post, val }));
  }


}
