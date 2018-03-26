import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let confirmPassword = AC.get('confirmPassword').value;
    if(password != confirmPassword) {
      AC.get('confirmPassword').setErrors( {MatchPassword: true});
    } else {
      AC.get('confirmPassword').setErrors( null);
      return null
    }
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
	rid: string;
	uid: string;
	resetResponse: string;
	resetReady: boolean = false;
	resetSuccess: boolean = false;
	resetPassword: string;
	confirmPassword: string
	resetPasswordForm: FormGroup;

  constructor(private route: ActivatedRoute, private http: HttpClient, @Inject(FormBuilder) fb: FormBuilder) {
  	route.params.subscribe(params => {
  		this.rid = params['rid'];
  	});

  	this.resetPasswordForm = fb.group({
      password: [this.resetPassword, Validators.minLength(8)],
      confirmPassword: [this.confirmPassword, Validators.minLength(8)],
      }, {validator: PasswordValidation.MatchPassword});
  }

  ngOnInit() {
  	this.http.post(environment.host_url + '/auth/reset_pass/check',
  		{"token": this.rid},
  		{
  			observe: 'response',
  			headers: new HttpHeaders()
  				.set('content-type', 'application/json')
  		}
  	).subscribe(res => {
  		this.resetResponse = res.body['message'];
  		if (res.body['status'] == 'success') {
  			this.resetReady = true;
  			this.uid = res.body['data']['user_id'];
  		}
  	},
  	(err: HttpErrorResponse) => {
  		console.log(err);
  		this.resetResponse = err.error.message;
  		this.resetReady = false;
  	});
  }

  /*
   * Submits the form and sends HTTP request to change password
   */
  onSubmit(event) {
  	this.http.post(environment.host_url + '/auth/reset_pass',
      {
      	'user_id': this.uid,
      	'password': this.resetPassword
      },
      {
        observe: 'response',
        // withCredentials: true,
        headers: new HttpHeaders()
          .set('content-type', 'application/json')
      }

    ).subscribe((re) => {
        let credentials = re.body;
        this.resetResponse = credentials['message'];
        this.resetSuccess = (credentials['status'] === 'success');
      },
      (err: HttpErrorResponse) => {
        this.resetResponse = err.error.message;
        this.resetSuccess = false;
      }
    )
  }

}
