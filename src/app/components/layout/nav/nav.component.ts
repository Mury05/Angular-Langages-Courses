import { Component } from '@angular/core';
import { ConnexionService } from '../../../service/connexion.service';

@Component({
  selector: 'app-nav',
  standalone: false,

  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private authService: ConnexionService) { }

  logOut() {
    this.authService.logout();
  }
}
