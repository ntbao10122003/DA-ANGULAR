import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  loginForm : FormGroup;
  constructor(
    // private userService : AuthService,
    private router :Router,
    private authService: AuthService,
    
  ){
    this.loginForm = new FormGroup({
      email : new FormControl ('',[Validators.email, Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
    const data = this.loginForm.value;
    this.authService.signin(data).subscribe((auth) => {
      console.log(auth);
      localStorage.setItem('userInfo',JSON.stringify(auth))
      alert("Đăng nhập thành công")
      this.router.navigateByUrl('/admin')
    })
  }

}
