import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;

  constructor(private _httpServ: HttpService) { }

  ngOnInit() {
    this.grabAuthors();
  }
  grabAuthors(){
    let obs = this._httpServ.getAllAuthors();
    obs.subscribe(data => {
      this.authors = data['results'];
      console.log('Got data!', data);
    });

  }

  destroy(author){
    let observable = this._httpServ.destroyAuthor(author._id);
    observable.subscribe(data => {
      if(data['message'] === "Success"){
        alert(`You deleted ${author.name}!`);
      }
    })
    this.grabAuthors();
  }
}
