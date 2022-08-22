import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezadopeque',
  templateUrl: './encabezadopeque.component.html',
  styleUrls: ['./encabezadopeque.component.css']
})
export class EncabezadopequeComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }


  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
