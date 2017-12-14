import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team-service.service';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {
  players
  
  constructor(private _service: TeamServiceService) { 
    this.players = []
  }

  ngOnInit() {
    this._service.getAll(()=>{
      this.players = this._service.players
    })
  }


}
