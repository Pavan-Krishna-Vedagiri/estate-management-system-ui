import { CanActivateFn, Route, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService : AuthService = inject(AuthService);
  const router : Router = inject(Router)

  if(authService.isLoginned()){
    return true;
  }else{
    router.navigate(['/']);
    return false;
  }
};
