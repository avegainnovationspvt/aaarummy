import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamemidComponent } from './gamemid/gamemid.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'game', component: GamemidComponent},
  { path: 'home', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
