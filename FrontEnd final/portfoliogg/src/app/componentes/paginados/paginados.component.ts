import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.css']
})
export class PaginadosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
