import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPagegComponent } from './login-pageg/login-pageg.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthFormsModule } from '../../auth-forms/auth-forms.module';

@NgModule({
  declarations: [LoginPagegComponent, RegisterPageComponent],
  imports: [CommonModule, AuthRoutingModule, AuthFormsModule],
})
export class AuthModule {}
