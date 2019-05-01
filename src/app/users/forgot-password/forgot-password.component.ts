import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, ResetPasswordData } from 'angular2-token';
import { Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  constructor(
    private _tokenService: Angular2TokenService,
    private router: Router,
    private toastService: MzToastService
  ) { }

  private _resetPasswordData: ResetPasswordData = <ResetPasswordData>{};

  ngOnInit() {
  }

  onSubmit() {
    this._tokenService.resetPassword(this._resetPasswordData).subscribe(
      res => {
        const message = res.json()['message']
        this.toastService.show(message, 8000, 'green'); 
        this.router.navigate(['/login']);
      }, error => {
        this._resetPasswordData = <ResetPasswordData>{};
        
        if (error.status == 500){
          const message = JSON.parse(error._body)['exception'].replace(/#</, '').replace(/>/, '')
          this.toastService.show(message, 8000, 'red')
        }
        else if ( error.status !== 0 ) {
          for (const message of JSON.parse(error._body)['errors']) {
            this.toastService.show(message, 8000, 'red');
          }
        } else {
          this.toastService.show('Connection Error', 8000, 'red');
        }
      }
    )
  }
}
