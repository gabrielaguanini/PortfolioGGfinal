import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-paginauno',
  templateUrl: './paginauno.component.html',
  styleUrls: ['./paginauno.component.css']
})
export class PaginaunoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  AOS.init();   
}



}
