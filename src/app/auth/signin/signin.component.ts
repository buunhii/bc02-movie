import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// Router
import { Router } from '@angular/router';

import { AuthService } from '@/core/service/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm!: NgForm;
  error: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  handleSignin() {
    // Chặn khi người dùng submit value chưa hợp lệ
    if (this.signinForm.invalid) return;

    // console.log(this.signinForm.value);
    this.isLoading = true;
    this.authService.signin(this.signinForm.value).subscribe({
      next: (result) => {
        this.isLoading = false;
        // Set kết quả đăng nhập cho biến currentUser trên authService
        this.authService.setCurrentUser(result);
        // Lưu data xuống localStorage
        localStorage.setItem('user', JSON.stringify(result));

        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error.error;
        console.log(error);
      },
    });
  }
}
