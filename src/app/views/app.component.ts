import { Component } from '@angular/core';

import { Observable }   from 'rxjs/Observable';

import {Post} from '../state/posts';
import {User} from '../state/users';

import {UserFacade} from '../state/users/user.facade';
import {PostsFacade} from '../state/posts/post.facade';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  post$: Observable<Post> = this.postService.post$;
  user$: Observable<User> = this.userService.user$;

  constructor(private userService:UserFacade, private postService:PostsFacade) { }

  login()         {  this.userService.login();      }
  logout()        {  this.userService.logout();     }

  vote(post: Post, val: number) {
    this.postService.vote(post, val);
  }
}
