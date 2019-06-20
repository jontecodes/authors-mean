import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author;
  errors = [];

  constructor(private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.author = {name: ''};
  }
  createAuthor(){
    this.errors = [];
    let obs = this._http.addAuthor(this.author);
    obs.subscribe(data => {
    if(data['message'] === 'Success'){
      this._router.navigate(['/']);
    } else {
      console.log(data['errors']['name']);
      this.errors.push(data['errors']);
      console.log(this.errors);
    }
    })
  }
}
