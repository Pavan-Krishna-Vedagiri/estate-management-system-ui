import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth-service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const authService : AuthService = inject(AuthService);
  const router : Router = inject(Router);

  const token = authService.getToken();

  const reqClone = token ? req.clone(
    {
      setHeaders : { "Authorization" : `bearer ${token}` }
    }
  ) : req;

  return next(reqClone).pipe(
    tap({
      error: (err) => {
        if (err.status === 401) {
          authService.logout();
          router.navigate(['/']);
        }
      }
    })
  );
};
