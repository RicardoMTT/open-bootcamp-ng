import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  exports: [LoginFormComponent, RegisterFormComponent],
})
export class AuthFormsModule {}
