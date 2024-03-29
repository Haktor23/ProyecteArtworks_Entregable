import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private usersService: UsersService, private router: Router) { }
  mode: string = 'login';

  @Input()
  set setmode(value: string) {
    this.mode = value;
    if(value ==='logout'){
      this.usersService.logout();
      this.router.navigate(['userManagement','login']);
    }
  }

  nombre: string = '';
  email: string = '';
  password: string = '';
  error: string = '';


  registro(){
    this.usersService.registrarUsuario(this.nombre, this.email, this.password);
    console.log(this.nombre, this.email, this.password);
  }

  login(){
    this.usersService.iniciarSesion(this.email, this.password);
    
  }

  /*
  async login() {
    let logged = await this.usersService.login(this.email, this.password);
    if (logged) {
      this.router.navigate(['favorites']);
      console.log('loged');
    } else {
      this.error = 'Bad Email or Password';
      console.log('error');
    }
  }*/



}
