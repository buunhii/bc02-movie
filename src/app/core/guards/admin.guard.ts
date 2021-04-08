import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser) {
      // Chưa đăng nhập
      this.router.navigateByUrl('/signin');
      return false;
    }
    if (currentUser.maLoaiNguoiDung !== 'QuanTri') {
      // Đã đăng nhập nhưng ko phải admin
      this.router.navigateByUrl('/');
      return false;
    }
    // nếu return về true => cho phép truy cập vào Route
    return true;
  }
}
