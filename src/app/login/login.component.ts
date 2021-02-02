import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  user ;
  

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required , Validators.email]],
      password: ['', Validators.required]
    });
  }
  async onSubmit() {
    
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;

      if (username === 'nihir@gmail.com' && password === '12345'){
        localStorage.setItem('token' , username+password)
        this.router.navigate(['/employees'])
      }
      
     else {
      this.formSubmitAttempt = true;
      this.loginInvalid = true;
    }
  }
  }

}
