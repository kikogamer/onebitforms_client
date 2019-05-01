import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'ngx-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent]
})
export class UsersModule { }