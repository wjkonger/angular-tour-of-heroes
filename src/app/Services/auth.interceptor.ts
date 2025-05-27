import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToke = getJwtToken();
  if (jwtToke)
  {
    req.clone({
      setHeaders:{
        Authorization: "Bearer ${jwtToken}"
      }
    });
  }

  return next(req);
};

function getJwtToken(): string | null {
  return localStorage.getItem("JWT_TOKEN");
}