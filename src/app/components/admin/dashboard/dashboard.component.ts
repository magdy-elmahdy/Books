import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  AllSchools:any
  AllKids:any
  AllParents:any
  constructor(private _AdminService:AdminService){}

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
      // Get All Parents
  getAllParents(){
    this._AdminService.getAllParents().subscribe(data=>{
      this.AllParents=data
    })
  }


  ngOnInit(){
    this.getllSchools()
    this.getAllKids()
    this.getAllParents()
  }
}
