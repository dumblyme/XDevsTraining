import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable()
export class TodoListService {
  url: string = "http://www.mocky.io/v2/5af6605f3100008c0000269b";
  constructor(
    private _http: HttpClient
  ) { }

  getTodo(){
    return this._http.get(this.url);
  }

}