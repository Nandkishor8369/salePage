import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor( private http : HttpClient) { 
    
  }

  getData(){
    return this.http.get('http://localhost:3000/data');
  }
  getDetails(){
    return this.http.get('assets/data.json')
  }
}
