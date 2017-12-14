import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { TeamServiceService } from './team-service.service'
import { AppComponent } from './app.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { AppRoutingModule } from './app-routing.module';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponentComponent,
    PlayerStatusComponent,
    NewPlayerComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TeamServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
