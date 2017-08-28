import { Injectable }                 from '@angular/core';
import { Effect, Actions }            from '@ngrx/effects';
import { AngularFireDatabase }        from 'angularfire2/database';

import { Observable }                 from 'rxjs/Observable';
import { of }                         from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as postActions from '../actions/post.actions';
export type Action = postActions.All;


@Injectable()
export class PostEffects {

  constructor(private actions: Actions, private db: AngularFireDatabase) {}

  @Effect()
  getPost: Observable<Action> = this.actions.ofType(postActions.GET_POST)
    .map((action: postActions.GetPost) => action.payload )
    .delay(2000) // delay to show spinner
    .mergeMap(payload => this.db.object(payload))
    .map(post => {
      post.pushKey = post.$key;
      return new postActions.GetPostSuccess(post);
    });


  @Effect()
  voteUpdate: Observable<Action> = this.actions.ofType(postActions.VOTE_UPDATE)
    .map((action: postActions.VoteUpdate) => action.payload )
    .mergeMap(payload => of(this.db.object('posts/' + payload.post.pushKey)
                         .update({ 
                           votes: payload.post.votes + payload.val 
                         })))

    .map(() => new postActions.VoteSuccess())
    .catch(err => of (new postActions.VoteFail( { error: err.message } )) );

  


}
