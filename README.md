# NgrxFire

NgrxFire is a redux demo app created with Angular ngrx and Firebase. Including Firebase Google OAuth and the Realtime Database. 

## Build your Angular ngrx on a Solid Foundation

Learn Angular ngrx Redux basics by building this app step-by-step. 

- [Video Lessons and Screencasts](https://angularfirebase.com)
- [Join the Slack Team](https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg)

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/assets%2Fngrx-user.gif?alt=media&token=06dab206-2950-4b0f-9d76-fa901d0b267a)

## Usage

Create a Firebase account at https://firebase.google.com/

- `git clone https://github.com/codediodeio/ngrx-fire.git ngrxFire`
- `cd ngrxFire`
- `npm install`

Create the environment file below `/src/environments/environment.ts`.

### environment.ts
```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    storageBucket: 'DEV-APP.appspot.com'
  }
};
```

And finally `ng serve`


## Additional Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

It uses AngularFire2 v4.0

Available under the MIT License.
