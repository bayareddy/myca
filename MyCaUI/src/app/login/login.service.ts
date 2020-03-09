import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { model } from '../Model/model';
import { CanActivate, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Injectable()
export class LoginService implements CanActivate{

  subject = new BehaviorSubject('');
  public messages$ = this.subject.asObservable()
  
  loginStatus;
  constructor(private route:Router) { 

  }
  
    
canActivate(){
  console.log(this.loginStatus)
  if(this.loginStatus=='loginned'){
    return true;
  }else{
this.route.navigate(['login'])
    return false}


  }


 subjectMethod$(value){
   this.subject.next(value);

 }
  
  ngOnInit() {
    
    
  }



} 
