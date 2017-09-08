# NgrxFire

NgrxFire is a redux demo app created with Angular ngrx and Firebase. Including Firebase Google OAuth and the Realtime Database. 

## Build your Angular ngrx on a Solid Foundation

Learn Angular ngrx Redux basics by building this app step-by-step. 

- [Video Lessons and Screencasts](https://angularfirebase.com)
- [Join the Slack Team](https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg)

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/assets%2Fngrx-user.gif?alt=media&token=06dab206-2950-4b0f-9d76-fa901d0b267a)

## Usage

#### Clone repository and prepare to build:

Use the following terminal commands to prepare to build your application:

- `git clone https://github.com/codediodeio/ngrx-fire.git ngrxFire`
- `cd ngrxFire`
- `npm install`

#### Create a Firebase account

*  Create a Firebase account at https://firebase.google.com/. 
*  Configure Authentication for the web app:
  >  ![firebaseauth](https://user-images.githubusercontent.com/210413/30171158-b036b8dc-93b6-11e7-9698-b355544d0c00.png)
*  Seed your Firebase database with sample post data:
  > ![ngrxdatabase](https://user-images.githubusercontent.com/210413/30178040-412557c0-93cd-11e7-8218-5f6a70ebca93.png)
   ```typescript
  {
    "posts" : {
    "testPost" : {
      "text" : "First Post [created in console]",
      "votes": 0
    }
    }
  }
   ```
*  Gather your Firebase configuration information:
  >  ![firebaseconfig](https://user-images.githubusercontent.com/210413/30178188-b219c6b4-93cd-11e7-854d-788a2c2d99b1.jpg)
*  Create the environment file below `/src/environments/environment.ts`.
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
*  And finally `ng serve`


## Additional Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

It uses AngularFire2 v4.0

Available under the MIT License.
