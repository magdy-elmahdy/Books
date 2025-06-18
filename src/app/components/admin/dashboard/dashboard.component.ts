import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  AdminPending:any
  AdminComfirmid:any
  AdminRejected:any
  
  StudentPending:any
  StudentComfirmid:any
  StudentRejected:any

  AllStudentPending:any
  AllBooksItems:any
  AllStudent:any
  isLoading1:boolean=false;
  isLoading2:boolean=false;
  isLoading3:boolean=false;
  isLoading4:boolean=false;
  Role:any=localStorage.getItem('BooksRole')!
  StudentId:any=localStorage.getItem('BooksId')!
  Name:any
  constructor(private _AdminService:AdminService,public _AuthService:AuthService, private _StudentService:StudentService){

    this.Name = localStorage.getItem('BookName')!

  }


  /////////////////////////// Admin ///////////////////////
      //  Pending
  getAdminPending(){
    this.isLoading1=true;
    this._AdminService.getAdminPending().subscribe((data:any)=>{
      this.isLoading1=false;
      this.AdminPending=data.records
      console.log(data);
    },error=>{
      this.isLoading1=false;
    })
  }
      //  Approved
  getAdminApproved(){
      this.isLoading2=true;
    this._AdminService.getAdminApproved().subscribe((data:any)=>{
      this.isLoading2=false;
      this.AdminComfirmid=data.records
      console.log(data);
    },error=>{
      this.isLoading2=false;
    })
  }
      //  Rejected
  getAdminRejected(){
    this.isLoading3=true
    this._AdminService.getAdminRejected().subscribe((data:any)=>{
      this.isLoading3=false;
      this.AdminRejected=data.records
      console.log(data);
    },error=>{
      this.isLoading3=false;
    })
  }

  /////////////////////////// Student ///////////////////////
      // Get Requested
  getAllStudentBooksWithItsStatus(){
    this._StudentService.getAllStudentBooksWithItsStatus().subscribe((data:any)=>{
      this.AllStudentPending=data
      this.StudentRejected = data.filter((item:any)=>item.status==0)
      this.StudentComfirmid = data.filter((item:any)=>item.status==1)
      
      console.log(this.StudentComfirmid);
      this.StudentPending = data.filter((item:any)=>item.status==2)
    })
  }

getAllStudents(){
    this._AdminService.getAllStudents().subscribe((res:any)=>{
      this.AllStudent = res;
      console.log(this.AllStudent); 
    }, error => {

  })
}
  ngOnInit(){
    if(this.Role=='student'){
      this.getAllStudentBooksWithItsStatus()
    }else if(this.Role=='admin'){
      this.getAdminPending()
      this.getAdminApproved()
      this.getAllStudents()
      this.getAdminRejected()
  }
}
}
