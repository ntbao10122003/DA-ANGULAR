import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formSignup = this.fb.group(
    {
      name : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required]],
      phone:['', [Validators.required]]
    }
  );

  constructor(
    private authService:AuthService,
    private fb : FormBuilder,
    private router : Router
  ){}

  checkPassword(FormGroup : FormGroup){
    const password = FormGroup.get('password')?.value;
    const confirmPassword = FormGroup.get('confirmPassword')?.value;
    if(password === confirmPassword) return null;
    return {notMatch : true};
  }

  onHandleSubmit(){
    if(this.formSignup.valid){
      this.authService.signup(this.formSignup.value).subscribe((data) =>{
        alert('đăng ký thành công');
        this.router.navigateByUrl('/signin');
      })
    }
  }

}
