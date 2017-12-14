import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TeamServiceService } from '../team-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  player = {
    name: '',
    position: '',
    game1: 'Undecided',
    game2: 'Undecided',
    game3: 'Undecided'
  }

  constructor(private _service: TeamServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('form submitted')
    console.log(this.player)
    this._service.addPlayer(this.player, ()=>{
      this.player.name = ''
      this.player.position = ''
    })
    this.router.navigate(['players/list']);
  }
  
}
