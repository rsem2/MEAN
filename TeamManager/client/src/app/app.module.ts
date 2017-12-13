import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { TeamServiceService } from './team-service.service'
import { AppComponent } from './app.component';
import { TeamComponentComponent } from './team-component/team-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TeamServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
