import { Component, OnInit } from '@angular/core';
import { BeltService } from './../belt.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-bucket-list',
  templateUrl: './user-bucket-list.component.html',
  styleUrls: ['./user-bucket-list.component.css']
})
export class UserBucketListComponent implements OnInit {
  log;
  bucketlist = {
    title: '',
    description: '',
    user: '',
    completed: false,
    created_at: new Date()
  }
  users = []
  personalList = []
  user


  constructor(private _service: BeltService, private router: Router) { }

  ngOnInit() {
    this.log = this._service.user
    if(!this.log){
      this.router.navigate(['/']);
    }
    this._service.getUsers(()=>{
      this.users = this._service.users
    })

    for(let i=0; i<this.users.length;i++){
      if(this.users[i]._id == this.log){
        this.personalList = this.users[i].bucketList
      }

    }
  }

  onSubmit(){
    this._service.addItem(this.bucketlist, ()=>{
      this.bucketlist = {
        title: '',
        description: '',
        user: '',
        completed: false,
        created_at: new Date()
      }
    })
    this._service.getUsers(()=>{
      this.users = this._service.users
    })
  }

  updateItem(done){
    console.log('clicked item', done)
    for(let i = 0; i<this.users.length; i++){
      // console.log(this.users[i].name, this.log)
      if(this.users[i].name == this.log){
        this.user = this.users[i]
        for(let j=0; j<this.user.bucketList.length; j++){
          console.log()
          if(this.user.bucketList[j].title == done){
            console.log('found this item', this.user.bucketList[j])
            this.user.bucketList[j].completed = !this.user.bucketList[j].completed
            console.log('changed this item', this.user.bucketList[j])
          }
        }
      }
    }
    this._service.editUser(this.user, ()=>{
      this._service.getUsers(()=>{
        this.users = this._service.users
      })
  })
  this._service.getUsers(()=>{
    this.users = this._service.users
  })
}

logout(){
  this.log = undefined
  this._service.logout()
  this.router.navigate(['/']);
}


}
