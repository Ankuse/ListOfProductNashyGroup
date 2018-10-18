import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({
      headers: req.headers
        .append('Authorization-Login', 'admin')
        .append('Authorization-Password', '03Shinglas+nashi')
    });
    return next.handle(cloneRequest);
  }
}
