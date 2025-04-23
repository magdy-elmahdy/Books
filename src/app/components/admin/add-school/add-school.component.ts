import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent {

  constructor(private _AdminService:AdminService,private _Router:Router){}
  AddSchoolForm=new FormGroup({
    'name':new FormControl('', [Validators.required])
  })


  submitAddSchool(){
    console.log(this.AddSchoolForm.value);
    this._AdminService.AddSchool(this.AddSchoolForm.value).subscribe((data:any)=>{
      console.log(data);
      Swal.fire('Great Job!',data.name+' School Added Successfully','success')
      this._Router.navigate(['/AllScools']);
    },error=>{
      console.log(error);
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
    })
  }
}
