import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BeltService } from './../belt.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  log;
  user = {
    name: ''
  }

  constructor(private _service: BeltService, private router: Router) { 
    
  }

  ngOnInit() {
    this.log = this._service.user
    if(this.log){
      this.router.navigate(['dashboard']);
    }
  }

  onSubmit(){
    this._service.addUser(this.user.name, ()=>{
      this.user.name = ''
      
    })
    this.router.navigate(['dashboard']);
  }

  logout(){
    this._service.logout(()=>{
      console.log('logged out in component')
    })
  }
}
