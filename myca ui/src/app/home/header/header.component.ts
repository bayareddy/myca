import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/login/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serviceservice: ServiceService) { }
username='';
sideNavOpen =false;
side:boolean= true;
  ngOnInit() {
  //  this.username= this.serviceservice.loginUserName;
  this.username=this.serviceservice.loginUserName;
  }
openNav(){
this.sideNavOpen=!this.sideNavOpen
if(this.sideNavOpen){
  this.side=!this.side;
  document.getElementById("mySidenav").style.width="230px";
}
else{
  document.getElementById("mySidenav").style.width="0px";
}

}
}
