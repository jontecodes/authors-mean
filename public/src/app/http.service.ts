import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get('/authors');
  }
  getOneAuthor(id){
    return this._http.get(`/author/${id}`);
  }
  addAuthor(author){
    return this._http.post('/create', author);
  }
  editAuthor(author){
    return this._http.put(`/update/author/${author._id}`, author);
  }
  destroyAuthor(id){
    return this._http.delete(`/destroy/${id}`);
  }
}
