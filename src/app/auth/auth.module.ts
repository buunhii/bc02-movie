import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { AuthComponent } from './auth.component';

// imp FormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SigninComponent, SignupComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
