import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  players;
  gameNo;
  player;

  constructor(private _service: TeamServiceService, private _route: ActivatedRoute, private router: Router) { 
    this.players = []
  }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      this.gameNo = params.get('gameno')
    })

    this._service.getAll(()=>{
      this.players = this._service.players
    })

  }

  status(id, status, gameNo){

    this._service.findPlayer(id,()=>{
      console.log('this should happen at the end of the find as the player has been identified')
      console.log(this._service.player[0].name)
      
      this.player = this._service.player
      this.player = this.player[0]
      let string = 'game'+gameNo
      this.player[string] = status
    })

    this._service.editPlayer(this.player, ()=>{
      // this.players = this._service.players
      console.log('updated player')
      // this._service.getAll(()=>{
      //   this.players = this._service.players
      // })
    })

    this._service.getAll(()=>{
      this.players = this._service.players
    })
  }

}
