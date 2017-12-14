import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';

@Injectable()
export class TeamServiceService {
  players;

  constructor(private _http: Http, private router: Router) { 
    this.players = []
  }

  addPlayer(player, cb){
    this._http.post('/addplayer', player).subscribe((res)=>{
      this.players.push(res.json())
      cb()
    })
  }

  // deletePlayer(id, cb){
  //   this._http.post('/removeplayer', id).subscribe((res){
  //     this.getAll(()=>{
  //       console.log('getting all players')
  //     })
  //   })
  // }

  deletePlayer(id, cb){
    let string = '/removeplayer/'+id;
    this._http.get(string).subscribe((res)=>{
      console.log('this should redirect...')
      // console.log(res)
      // cb()
    })
  }

  getAll(cb){
    console.log('in service')
    this._http.get('/allplayers').subscribe((res)=>{
      this.players = res.json()
      cb()
    })
  }

}
