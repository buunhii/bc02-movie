import { SignupParams } from './../models/auth';

import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninParams, SigninResult, SignupResult } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // BehaviorSubject: tạo ra một đối tượng có thể lưu trữ data
  // currenUser.valu => lấy ra value của biến currenUser
  // currenUser.next(value) => Set lại value của biến currenUser
  // currenUser.asObservable() => chuyển currenUser thành 1 Observable => ta có thể subcrible để theo dõi sự thay đổi data của biến này
  private currentUserSubject = new BehaviorSubject<SigninResult | null>(null);
  currentUser = this.currentUserSubject.asObservable();
  // Khi service khởi chạy, kiểm tra trong localStorage nếu có user sẽ set lại cho biến currentUser

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.setCurrentUser(JSON.parse(user));
    }
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  setCurrentUser(value: any) {
    this.currentUserSubject.next(value);
  }

  signin(values: SigninParams): Observable<SigninResult> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post<SigninResult>(url, values);
  }
  signup(values: SignupParams): Observable<SignupResult> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post<SignupResult>(url, { ...values, maNhom: 'GP01' });
  }
}
