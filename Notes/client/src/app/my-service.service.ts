import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class MyServiceService {
  notes;
  constructor(private _http: Http) {
    this.notes = [];
   }

  addNote(note, cb){
    console.log('now in service')
    console.log(note)
    this._http.post('/addnote', note).subscribe((res)=>{
      console.log(note)
      console.log(res.json())
      cb()
    })
  }

  findAll(cb){
    console.log('finding all...')
    this._http.get('/getall').subscribe((res)=>{
      this.notes = res.json()
      cb()
    })
  }
}
