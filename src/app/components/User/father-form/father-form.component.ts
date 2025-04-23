import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { FaConfig } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-father-form',
  templateUrl: './father-form.component.html',
  styleUrls: ['./father-form.component.scss']
})
export class FatherFormComponent implements OnInit{
  constructor(private _UserService:UserService,private _Router:Router){}
  FaConfig=FaConfig
  genderValue:any=''
  testdate='2023-08-14T21:00:00Z'
  isClicked:boolean=false;

  PatentForm=new FormGroup({
    'parentName':new FormControl('', [Validators.required]),
    'dateOfBirthDay':new FormControl('', [Validators.required]),
    'email':new FormControl('', [Validators.required, Validators.email]),
    'phoneNumber':new FormControl('', [Validators.required])
  })

  submitParentForm(){
    this.isClicked=true
    let Model = Object.assign(this.PatentForm.value,
      {gender:Number(this.genderValue)}
      )
    console.log(Model);
    this._UserService.AddParent(Model).subscribe((res:any)=>{
    this.isClicked=false
      console.log(res);
      
      Swal.fire('Good Job!',res.parentName+' Added Successfully','success');
      // this._Router.navigate(['/KidsForm/Magdy/3'])
      this._Router.navigate(['/KidsForm/'+res.parentName+'/'+res.age+'/'+res.parentId])
    },error=>{
      this.isClicked=false
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
      
    })
    
  }
  ngOnInit(): void {
  }
}
