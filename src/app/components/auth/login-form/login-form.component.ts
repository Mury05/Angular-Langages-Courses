import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnexionService } from '../../../service/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: false,

  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email?: string;
  password?: string;
  message: string = '';

  constructor(private connexionService: ConnexionService, private router: Router) { }


  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value, form.valid);

    if(form.valid){
      this.email = form.value.email;
      this.password = form.value.password;
      console.log(this.email, this.password);
      const user = this.connexionService.getUserConnexion(this.email, this.password);
      if (!user) {
        this.message= "Veuillez créer un compte ou renseigner les bons identifiants";
      }else{
        this.router.navigate(['/']);
      }
    }
  }
}
