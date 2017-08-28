# NgrxFire

NgrxFire is a redux demo app created with Angular ngrx and Firebase.

## Build your Angular ngrx on a Solid Foundation

Learn Angular redux basics by building this app step-by-step.

- [Lessons and Screencasts](https://angularfirebase.com)
- [Join the Slack Team](https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg)

![](/src/assets/ngrx-fire-demo.gif)

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
    apiKey: "APIKEY",
    authDomain: "DEV-APP.firebaseapp.com",
    databaseURL: "https://DEV-APP.firebaseio.com",
    storageBucket: "DEV-APP.appspot.com"
  }
};
```

And finally `ng serve`


## Additional Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

It uses AngularFire2 v4.0

Available under the MIT License.
