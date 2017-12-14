import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  players;
  gameString;
  gameNo;

  constructor(private _service: TeamServiceService, private _route: ActivatedRoute) { 
    this.players = []
    this.gameString = 'game1'
  }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      this.gameString = 'game'+params.get('gameno');
      this.gameNo = params.get('gameno')
      console.log(this.gameString)
    })

    this.players = this._service.getAll(()=>{
      console.log('getting players')
    })
  // }
  }

}
