// import { CanActivateFn } from '@angular/router';

// export const guardGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ConnexionService } from "../service/connexion.service";

export const AuthGuard = () => {
  const auth = inject(ConnexionService);
  const router = inject(Router);

  if(!auth.isAuthenticated()) {
      router.navigateByUrl('/login')
      return false
  }
  return true
}
