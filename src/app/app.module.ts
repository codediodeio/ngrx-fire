import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';

import { AppRoutingModule }          from './app-routing.module';
import { AppComponent }              from './app.component';

import { environment }               from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule }     from 'angularfire2/auth';


import { EffectsModule }             from '@ngrx/effects';
import { StoreModule }               from '@ngrx/store';
import { StoreDevtoolsModule }       from '@ngrx/store-devtools';

import { PostEffects }               from './effects/post.effects';
import { postReducer }               from './reducers/post.reducer';

import { UserEffects }               from './effects/user.effects';
import { userReducer }               from './reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

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
  bootstrap: [AppComponent]
})
export class AppModule { }
