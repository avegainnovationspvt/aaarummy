import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeftbtnComponent } from './leftbtn/leftbtn.component';
import { BtndownbannerComponent } from './btndownbanner/btndownbanner.component';
import { MiddlepartComponent } from './middlepart/middlepart.component';
import { GamemidComponent } from './gamemid/gamemid.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftbtnComponent,
    BtndownbannerComponent,
    MiddlepartComponent,
    GamemidComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
