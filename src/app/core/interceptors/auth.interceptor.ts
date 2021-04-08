import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../service/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.accessToken) {
      // user đã đăng nhập
      request = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Bearer ${currentUser.accessToken} `
        ),
      });
    }
    return next.handle(request);
  }
}
