import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../players.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  
  player;
  players;
  
  constructor(private _playersService: PlayersService) { 
    this.players = [];
    this.player = {name:''};
    this._playersService.getAll(()=>{
      this.players = this._playersService.players
    })
  }

  ngOnInit() {
  }

  addPlayer(){
    this._playersService.addPlayer(this.player, ()=>{
      this.player = {name:''}
      
      this._playersService.getAll(()=>{
        this.players = this._playersService.players
      })     
    })
  }

}
