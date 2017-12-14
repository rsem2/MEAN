import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserBucketListComponent } from './user-bucket-list/user-bucket-list.component';
import { BucketListComponent } from './bucket-list/bucket-list.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: UserBucketListComponent
  }, 
  {
    path: 'user/:id',
    pathMatch: 'full',
    component: BucketListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
