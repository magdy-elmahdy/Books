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
  AllSchools:any
  AllKids:any
  AllStudentPending:any
  Role:any=localStorage.getItem('BooksRole')!
  constructor(private _AdminService:AdminService,public _AuthService:AuthService, private _StudentService:StudentService){}

    // Get All Schools
  getllSchools(){
    this._AdminService.getAllSchools().subscribe(data=>{
      this.AllSchools=data
    },error=>{
      console.log(error);
    })
  }

      // Get All Kids
  getAllKids(){
    this._AdminService.getAllKids().subscribe(data=>{
      this.AllKids=data;
    },error=>{
      console.log(error);
    })
  }

  /////////////////////////// Student ///////////////////////
      // Get Requested
  getStudentRequested(){
    this._StudentService.getAllpendingBooks().subscribe(data=>{
      this.AllStudentPending=data
      console.log(data);
      
    })
  }


  ngOnInit(){
    if(this.Role=='student'){
      this.getStudentRequested()
    }else if(this.Role=='admin'){
    // this.getllSchools()
    // this.getAllKids()
    // this.getAllParents()
  }
}
}
