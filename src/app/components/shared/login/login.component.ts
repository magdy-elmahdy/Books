import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { ToastrService } from 'ngx-toastr';

import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

declare var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  res:any;
  errorEsist:boolean =false;
  isClicked:boolean =false;
  
  constructor(private _AuthService:AuthService ,private _Router:Router , private _ToastrService:ToastrService){
    if(this._AuthService.isLoggedIn()){
      this._Router.navigate(['/AdminDashboard'])
    }
  }

  // _JwtHelperService =new JwtHelperService()
  // token:any = localStorage.getItem("TOKEN");
  loginForm:FormGroup =new FormGroup({
    'userName':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(22)]),
    'password':new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(22)])
  });

    redirectTo(uri: string) {
      this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this._Router.navigate([uri]));
   }
   async submitLoginForm(){
      this.isClicked =true
      this._AuthService.logInForm(this.loginForm.value).subscribe(async (res:any)=>{
      await  localStorage.setItem('BooksToken',res.token)///////////////// Token
      await  this._Router.navigate(['/AdminDashboard'])
      this._ToastrService.success('Logged in Successfully')
      },error=>{
        console.log(error);
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error,
        })
      })
    }
    
login:AnimationOptions={
  path:'assets/imgs/login.json'
}

ngOnInit(): void {
}
}
