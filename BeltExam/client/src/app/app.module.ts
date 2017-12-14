import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeltService } from './belt.service';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { UserBucketListComponent } from './user-bucket-list/user-bucket-list.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    UserBucketListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BeltService],
  bootstrap: [AppComponent]
})
export class AppModule { }
