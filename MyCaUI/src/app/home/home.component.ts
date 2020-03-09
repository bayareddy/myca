import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


constructor(private router:Router,private service:LoginService,private http:HttpClient){}
data
ngOnInit(){

 this.data=this.service.messages$.subscribe(data=>{this.data=data
  console.log(data)
  console.log(this.array)
});
 
}

array=['a','b','c','d','e']

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    this.service.subjectMethod$('sideNavPardha')
    let s='manohar'

console.log('splice',this.array.splice(2,3,'p'))
console.log(this.array)

  }





}
