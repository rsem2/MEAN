import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
    street: '',
    unit: '',
    city: '',
    state: '',
  }

  onSubmit(valid){
    var errors = [];
    console.log('submitted')
    console.log(this.user)
  }

  constructor() { }

  ngOnInit() {
  }

}
