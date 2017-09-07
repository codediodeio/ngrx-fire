import { Injectable }                 from '@angular/core';
import { Effect, Actions }            from '@ngrx/effects';
import { User }                       from './user.model';

import { AngularFireAuth }            from 'angularfire2/auth';
import * as firebase                  from 'firebase';

import { Observable }                 from 'rxjs/Observable';

import '../../utils/rxjs.operators';


import * as userActions from './user.actions';
type Action = userActions.All;


@Injectable()
export class UserEffects {

    constructor(private actions: Actions, private afAuth: AngularFireAuth) {}

    //// Get the Current User from Firebase

    @Effect()
    getUser:  Observable<Action> = this.actions.ofType(userActions.GET_USER)

        .map((action: userActions.GetUser) => action.payload )
        .switchMap(payload => this.afAuth.authState )
        .delay(2000) // delay to show loading spinner, delete me!
        .map( authData => {
            if (authData) {
                /// User logged in
                const user = new User(authData.uid, authData.displayName);
                return new userActions.Authenticated(user);
            } else {
                /// User not logged in
                return new userActions.NotAuthenticated();
            }

        })
        .catch(err =>  Observable.of(new userActions.AuthError()) );


    //// Login with Google OAuth

    @Effect()
    login:  Observable<Action> = this.actions.ofType(userActions.GOOGLE_LOGIN)

        .map((action: userActions.GoogleLogin) => action.payload)
        .switchMap(payload => {
            return Observable.fromPromise( this.googleLogin() );
        })
        .map( credential => {
            // successful login
            return new userActions.GetUser();
        })
        .catch(err => {
            return Observable.of(new userActions.AuthError({error: err.message}));
        });

    //// Logout

    @Effect()
    logout:  Observable<Action> = this.actions.ofType(userActions.LOGOUT)

        .map((action: userActions.Logout) => action.payload )
        .switchMap(payload => {
            return Observable.of( this.afAuth.auth.signOut() );
        })
        .map( authData => {
            return new userActions.NotAuthenticated();
        })
        .catch(err => Observable.of(new userActions.AuthError({error: err.message})) );


    /// Helper Methods
    private googleLogin(): firebase.Promise<any> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
    }


}
