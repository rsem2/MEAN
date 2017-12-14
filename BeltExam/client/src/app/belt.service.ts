import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';

@Injectable()
export class BeltService {
  user;
  users;

  constructor(private _http: Http, private router: Router) {
   }

  addUser(user, cb){
    console.log('adding this user in service:',user)
    let string = '/adduser/'+user
    this.user = user;
    this._http.get(string).subscribe((res)=>{
      console.log('returning from adding user in service:')
      cb()
      })
  }

  addItem(item, cb){
    console.log('adding this item in service:',item)
    for(var i=0; i<this.users.length; i++){
      if(this.users[i].name == item.user){
        this.users[i].bucketList.push(item)
        console.log(this.users[i].bucketList)
        let string = '/edituser/'+this.users[i]._id;
        this._http.post(string, this.users[i]).subscribe((res)=>{
          console.log('in service cb')
        })
        cb()
      }

    }

    editUser(this.user, cb){
      
    }

    


    // let string = '/adduser/'+user
    // this.user = user;
    // this._http.get(string).subscribe((res)=>{
    //   console.log('returning from adding user in service:')
    //   cb()
    //   })
  }

  getUsers(cb){
    this._http.get('/allusers').subscribe((res)=>{
      this.users = res.json()
      cb()
    })
  }

  // checkLogin(){
  //   console.log('in service about to check if someone is logged in')
  //   this._http.get('/loggedin').subscribe((res)=>{
  //     // this.user = res;
  //     console.log(res)
  //     console.log('on the way back in service finding out if someone was logged in')
  //   })
  // }

  logout(cb){
    console.log('logging out')
  }
}
