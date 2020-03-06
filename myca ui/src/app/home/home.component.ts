import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../login/service.service'
  import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
temp;
  constructor( private serviceservice:ServiceService) { }

  ngOnInit() {
  

  
  }
}
