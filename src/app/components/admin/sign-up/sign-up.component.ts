import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  
  errorEsist:boolean =false;
  isClicked:boolean =false;
  Roles:any;
  errorMsg:any
  selectedRoleValue:any;
  selectedGenderValue:any
  constructor( private _Router:Router, public _ToastrService:ToastrService){}

SignUPForm:FormGroup =new FormGroup({
      'firstName':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'lastName':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'userName':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'email':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'phoneNumber':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'password':new FormControl('',[Validators.required,Validators.minLength(3)]),
});

  submitSignUpForm(){
      // this.isClicked=true;
      // let Model = Object.assign(this.SignUPForm.value,
      //   {gender:Number(this.selectedGenderValue)},
      //   {role:Number(this.selectedRoleValue)},
      //   {departmentId:1}
      //   )
      //   console.log(Model);
      // this._AuthService.signUp(Model).subscribe((res:any) =>{
      // this.isClicked=false;
      // this._ToastrService.success(res.massage, " Well Done");
      // Swal.fire(
      //   'Good job!',
      //   res.massage,
      //   'success'
      // )
      //   console.log(res);
      // },error=>{
      // this.errorMsg=error.error
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: error.error,
      // })
      // this._ToastrService.error(this.errorMsg, "Error Eccurred");
      //   this.errorEsist =true;
      //   this.isClicked=false;
      //   console.log(error);
      // })
    }
  getRoles(){

  }

signup1:AnimationOptions={
  path:'assets/imgs/signup1.json'
}
ngOnInit(): void {
  this.getRoles()
}

}
