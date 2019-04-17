import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamemidComponent } from './gamemid/gamemid.component';
import { HomeComponent } from './home/home.component';
import { ForpasComponent } from './forpas/forpas.component';
const routes: Routes = [
  { path: 'game', component: GamemidComponent},
  { path: '', component: HomeComponent},
  { path: 'forget-password', component: ForpasComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
