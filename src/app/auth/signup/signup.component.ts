import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor() {
    // taiKhoan, matKhau, email, hoTen, soDt
    this.signupForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      hoTen: new FormControl('', [Validators.required]),
      soDt: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  checkError(field: string, type?: string) {
    const control = this.signupForm.get(field);

    if (type) {
      return control?.errors?.[type];
    }

    return control?.invalid && (control?.touched || control?.dirty);
  }

  handleSignup() {
    // Sử lý chặn khi submit nhưng input có lỗi
    this.signupForm.markAllAsTouched();
    if (this.signupForm.invalid) return;

    console.log(this.signupForm.value);
  }
}
