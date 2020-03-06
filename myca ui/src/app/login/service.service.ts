import { Injectable } from '@angular/core';
import { RestService } from '../service/rest.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  loginUserName
  onSubmit(data: any) {
    throw new Error("Method not implemented.");
  }
  currentUser: any;

  constructor(private http:HttpClient){

    }
    getData(){
      return this.http.get('assets/login.json')
    }






} 
