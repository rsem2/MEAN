import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})

export class BucketListComponent implements OnInit {
  log;
  users = []
  personalList = []
  person = ''
  name = ''

  constructor(private _service: BeltService, private router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.person = params.get('id')

 })
   }

  ngOnInit() {
    this.log = this._service.user
    if(!this.log){
      this.router.navigate(['/']);
    }

    this._service.getUsers(()=>{
      this.users = this._service.users
    })

    this.users = this._service.users
    console.log(this.users)

    for(let i=0; i<this.users.length;i++){
      console.log(this.users[i]._id, this.person)
      if(this.users[i]._id == this.person){
        this.name = this.users[i].name
        this.personalList = this.users[i].bucketList
      }

    }
  }

  logout(){
    this.log = undefined
    this._service.logout()
    this.router.navigate(['/']);
  }

}
