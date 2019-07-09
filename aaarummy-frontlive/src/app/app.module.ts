import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeftbtnComponent } from './leftbtn/leftbtn.component';
import { BtndownbannerComponent } from './btndownbanner/btndownbanner.component';
import { MiddlepartComponent } from './middlepart/middlepart.component';
import { GamemidComponent } from './gamemid/gamemid.component';
import { HomeComponent } from './home/home.component';
import { ForpasComponent } from './forpas/forpas.component';
import { LoginComponent } from './login/login.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftbtnComponent,
    BtndownbannerComponent,
    MiddlepartComponent,
    GamemidComponent,
    HomeComponent,
    ForpasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
