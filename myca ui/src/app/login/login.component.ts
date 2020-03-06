import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../login/service.service';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


@Input() parentInput;
@Output() childInput = new EventEmitter;


  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required]),
    password: new FormControl('',[
      Validators.required]),
  });
  errMsg=false;
  get username() { 
    return this.loginForm.get('username'); 
  }
  get password() { 
    return this.loginForm.get('password'); 
  }
 
  constructor(private serviceService:ServiceService, private router:Router,private http:HttpClient) { }
  ngOnInit() {

    // this.childInput.emit('i am from child');
  }
  onSubmit() {
    //console.log("@submit",event);
    console.log(this.loginForm.value);
this.http.get('assets/login.json').subscribe(res=>{
  

 
  console.log('data is',res[0]['username']);
  console.log(this.loginForm.value.username)
  
  for(let i=0; i<=10; i++){
    let username=res[i]['username']
  let password=res[i]['password']
  if(this.loginForm.value.username==username&&this.loginForm.value.password==password) {
  
  //  this.serviceService.currentUser=res;
 this.serviceService.loginUserName=this.loginForm.value.username;
    this.router.navigate(['./home']);

  } else {
    this.errMsg=true;  
  }
}
});
  }
}
