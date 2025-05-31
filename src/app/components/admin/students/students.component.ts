import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
declare var $: any

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  Form:FormGroup = new FormGroup({
    'fullname':new FormControl('',[Validators.required]),
    'username':new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required]),
    'studentid':new FormControl('',[Validators.required]),
  });
AllStudent: any = [
    {fullName:'Aya Essam',Email:'aya12@gmail.com', id:'37657485'},
    {fullName:'Rania Adel',Email:'rania25@gmail.com', id:'4565657485'},
    {fullName:'Lama Ashraf',Email:'lama12@gmail.com', id:'96357485'},
    {fullName:'Ahmed Samy',Email:'ahmed2d@gmail.com', id:'67657485'},
  ]
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes = [5, 8, 10, 15, 20];
  term: any;
  loading: boolean = false
  isClicked: boolean = false
  ErrorMsg: any = ''
  constructor(private _StudentService:StudentService, private _ToastrService:ToastrService , private _AdminService:AdminService) {}



  SubmitAddStudent(){
      this.isClicked =true
      let Model =Object.assign(this.Form.value,{role:"student"})
      console.log(Model);
      
      this._StudentService.register(Model).subscribe((res:any)=>{
        console.log(res);
        this.getAllStudents();
        $("#AddModal").modal('toggle')

        this.isClicked =false
      this._ToastrService.success('Student added Successfully')
      },error=>{
        this.isClicked =false
        console.log(error);
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
      })
    }
    
  //Pagination Methods
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  toggleDelete(){
     $('.Delete').toggle(500)
  }
  getAllStudents(){
    this.loading = true
    this._AdminService.getAllStudents().subscribe((res:any)=>{
      this.loading = false
      this.AllStudent = res;
      this.loading = false;
      console.log(this.AllStudent); 
    }, error => {
      this.loading = false

  })
}
  ngOnInit(): void {
    this.getAllStudents();
  }
}
