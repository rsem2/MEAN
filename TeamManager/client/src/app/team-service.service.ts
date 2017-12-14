import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';

@Injectable()
export class TeamServiceService {
  players;
  player;

  constructor(private _http: Http, private router: Router) { 
    this.players = []
  }

  addPlayer(player, cb){
    this._http.post('/addplayer', player).subscribe((res)=>{
      this.players.push(res.json())
      cb()
    })
  }

  editPlayer(player, cb){
    console.log('in service editing player')
    let string = '/editplayer/'+player._id;
    this._http.post(string, player).subscribe((res)=>{
      console.log('in service cb')
    })
    cb()
  }

  deletePlayer(id, cb){
    let string = '/removeplayer/'+id;
    this._http.get(string).subscribe((res)=>{
    })
  }

  getAll(cb){
    this._http.get('/allplayers').subscribe((res)=>{
      this.players = res.json()
      cb()
    })
  }

  findPlayer(id, cb){
    let string = '/findplayer/'+id;
    console.log('string to send to the route finding the player from id: ',string)
    this._http.get(string).subscribe((res)=>{
      console.log('returning back from the route in the service with the player information')
      this.player = res.json()
      console.log('service player information', res.json())
      cb()
    })
  }

}
