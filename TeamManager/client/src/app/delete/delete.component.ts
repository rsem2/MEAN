import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamServiceService } from './../team-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _service: TeamServiceService, private router: Router) { }

  ngOnInit() {
    console.log('howdy')
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this._service.deletePlayer(params.get('id'), function(){
      })
    })
    this.router.navigate(['players/list']);
  }

}
