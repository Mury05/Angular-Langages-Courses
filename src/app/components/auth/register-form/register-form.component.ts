import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: false,

  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  inscriptionForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    profession: new FormControl('', [Validators.required]),
    motDePass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmMotDePass: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if(this.inscriptionForm.valid) {
      console.log(this.inscriptionForm.value);
    }else{
      console.log('Formulaire invalide');
    }
  }

  matchPasswords() {
    return this.inscriptionForm.value.motDePass === this.inscriptionForm.value.confirmMotDePass;
  }
}
