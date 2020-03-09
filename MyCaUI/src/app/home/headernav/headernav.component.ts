import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {

  sidevavOpen = false;
  firstName;
  side: boolean = false;
  constructor(private loginService: LoginService) { }
  ngOnInit() {
  
    this.loginService.messages$.subscribe(data => {


      if (data == 'sideNavPardha' && this.sidevavOpen) {
        this.side = !this.side
        this.sidevavOpen = !this.sidevavOpen
      }

    })

  }


  sideNav() {
    this.sidevavOpen = !this.sidevavOpen
    if (this.sidevavOpen) {
      this.side = !this.side
      document.getElementById("mySidenav").style.width = "230px";
    } else {
      this.side = !this.side
      document.getElementById("mySidenav").style.width = "0";
    }


  }


}
