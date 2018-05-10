import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }
    getData(pokeID) {
        return new Promise((response, reject) => {
            let url = "https://pokeapi.co/api/v2/pokemon/"+pokeID;
            this.http.get(url).subscribe(
                (res) => {
                    if(response){
                        response(JSON.parse(res.text()));
                    } else {
                    reject(alert("Fetching failed. Please try again."));
                    }
                }
            )
        });
    }
    getTypesData() {
        return new Promise((response, reject) => {
            
            let url = "https://pokeapi.co/api/v2/type";
            this.http.get(url).subscribe(
                (res) => {
                    if(response){
                        response(JSON.parse(res.text()));
                    } else {
                    reject(alert("Fetching failed. Please try again."));
                    }
                }
            )
        });
    }
}