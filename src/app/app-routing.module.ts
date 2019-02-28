import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamemidComponent } from './gamemid/gamemid.component';

const routes: Routes = [
  { path: 'game', component: GamemidComponent  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
