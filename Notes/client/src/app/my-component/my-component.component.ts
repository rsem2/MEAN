import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponentComponent implements OnInit {
  note;
  notes;

  constructor(private _service: MyServiceService) {
    this.note = {content: '', created_at: new Date()} 
    this.notes = []
  }

  ngOnInit() {
    this.findAll()
  }

  addNote(){
    console.log(this.note.content)
    this._service.addNote(this.note, ()=>{
      this.findAll()
      this.note = {content: '', created_at: new Date()} 
    })
  }

  findAll(){
    console.log('beginning to find all')
    this._service.findAll( ()=>{
      this.notes = this._service.notes
    })
  }

}
