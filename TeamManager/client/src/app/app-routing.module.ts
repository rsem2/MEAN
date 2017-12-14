import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { DeleteComponent } from './delete/delete.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'players/list'
  },
  {
    path: 'players/list',
    pathMatch: 'full',
    component: TeamComponentComponent
  },
  {
    path: 'status/players/addplayer',
    pathMatch: 'full',
    component: NewPlayerComponent
  },
  {
    path: 'status/game/:gameno',
    pathMatch: 'full',
    component: PlayerStatusComponent
  },
  {
    path: 'players/list/delete/:id',
    pathMatch: 'full',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
