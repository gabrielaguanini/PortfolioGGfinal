import { Component, OnInit } from '@angular/core';
import { NuevoUsuarioService } from 'src/app/service/nuevo-usuario.service';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  form:FormGroup;

  isLogged = false;
  isLogginFail = false;
  nuevoUsuario!: NuevoUsuario;
  nombre!:string;
  nombreUsuario!: string;
  email!:string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private nuevoUsuarioServ: NuevoUsuarioService, private tokenService: TokenService, 
    private router: Router, private formBuilder:FormBuilder) {

      this.form=this.formBuilder.group({
        
        nombre:['', [Validators.required]],
        nombreUsuario:['', [Validators.required]],
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required]]
  
  
        })
     }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  nuevoRegistro(): void {

    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario,this.email, this.password);
    this.nuevoUsuarioServ.nuevoUsu(this.nuevoUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['iniciar-sesion']);
      
    }, err => {
      alert("Error en la autenticacion de usuario"); 
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;     
      console.log(this.errMsj);
      
    }
    )
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get NombreUsuario(){
    return this.form.get('nombreUsuario');
  }

  get Password(){
    return this.form.get('password');
  }

  get Email(){
    return this.form.get('email');
  }

 
}
