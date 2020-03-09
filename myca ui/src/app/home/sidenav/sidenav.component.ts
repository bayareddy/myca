import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
// close;
  constructor() { }

  ngOnInit() {
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("footer").style.marginLeft= "0";
    
  }
  // openNav(){
  //   this.close=!this.close;
  //   document.getElementById("mySidenav").style.width="0px";
  // }
}
