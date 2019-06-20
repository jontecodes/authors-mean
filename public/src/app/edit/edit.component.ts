import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edit;
  editID;
  errors;

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('Params', params['id']);
      this.editID = params['id'];
    });
    this.getAuthor(this.editID);
    this.edit = {name: ''};
  }

  getAuthor(id){
    let obs = this._http.getOneAuthor(id);
    obs.subscribe(data => {
      this.edit = data['results'];
    });
  }

  editAuthor(){
    let obs = this._http.editAuthor(this.edit);
    obs.subscribe(data => {
      if(data['message'] === 'Success'){
        this._router.navigate(['/']);
      } else {
        this.errors = data['errors'];
        console.log('Our Errors',this.errors);
      }
    });
  }

}
