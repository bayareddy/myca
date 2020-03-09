import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, NavigationStart, CanActivate } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


constructor(private service:LoginService,private route:Router){}
data

ngOnInit(){
}



  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    this.service.subjectMethod$('sideNavPardha')
 

  }





}
