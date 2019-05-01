import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePasswordData, Angular2TokenService } from 'angular2-token';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _tokenService: Angular2TokenService,
    private toastService: MzToastService,
    private router: Router
  ) { }

  private _updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};

  ngOnInit() {
    this._route.queryParamMap.subscribe(queryParams => {
      this._updatePasswordData.resetPasswordToken = queryParams.get('access-token')
    })    
  }

  onSubmit() {
    this._tokenService.updatePassword(this._updatePasswordData).subscribe(
      res => {
        const message = res.json()['message']
        this.toastService.show(message, 8000, 'green'); 
        this.router.navigate(['/forms']);
      },
      error => {
        this._updatePasswordData = <UpdatePasswordData>{};
        
        if ( error.status !== 0 ) {
          for (const message of JSON.parse(error._body)['errors']['full_messages']) {
            this.toastService.show(message, 8000, 'red');
          }
        } else {
          this.toastService.show('Connection Error', 8000, 'red');
        }
      }
    )
  }

}
