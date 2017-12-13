import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlayersService {

  players;

  constructor(private _http: Http) { 
    this.players = [];
  }

  getAll(cb){
    this._http.get('/getall').subscribe((res)=>{
      this.players = res.json()
      cb()
    })
  }

  addPlayer(player, cb){
    this._http.post('/addplayer', player).subscribe((res)=>{
      this.players.push(res.json());
      cb();
    })
  }

}
