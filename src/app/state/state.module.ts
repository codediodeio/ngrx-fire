import { NgModule }                  from '@angular/core';

import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule }     from 'angularfire2/auth';

import { EffectsModule }             from '@ngrx/effects';
import { StoreModule }               from '@ngrx/store';
import { StoreDevtoolsModule }       from '@ngrx/store-devtools';

// *************************
// Custom Application imports
// *************************

import { PostEffects }               from './posts/post.effects';
import { postReducer }               from './posts/post.reducer';

import { UserEffects }               from './users/user.effects';
import { userReducer }               from './users/user.reducer';

import { environment }               from '../../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    EffectsModule.forRoot([
      PostEffects,
      UserEffects
    ]),

    StoreModule.forRoot({
      post: postReducer,
      user: userReducer
    }),

    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
})
export class AppStateModule { }
