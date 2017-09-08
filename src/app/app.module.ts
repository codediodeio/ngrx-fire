import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';

// *************************
// Custom Application imports
// *************************

import { AppRoutingModule }          from './app-routing.module';
import { AppStateModule }            from './state/state.module';

import { AppComponent }              from './views/app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStateModule,
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
