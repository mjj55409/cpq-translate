import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {IndexComponent} from "./index/index.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
