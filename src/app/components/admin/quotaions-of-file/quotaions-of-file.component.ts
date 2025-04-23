import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-quotaions-of-file',
  templateUrl: './quotaions-of-file.component.html',
  styleUrls: ['./quotaions-of-file.component.scss']
})
export class QuotaionsOfFileComponent implements OnInit {
	
  
  FileId: any;
  ParentsQuotaions:any
  KidsQuotaions:any
  loadingParents:boolean=false;
  loadingKids:boolean=false;
  constructor(private _ActivatedRoute: ActivatedRoute, private _AdminService:AdminService) {
    this.FileId = this._ActivatedRoute.snapshot.paramMap.get("id");
  }

    // Parents
  getParentsQuotaionsByFileId(){
    this.loadingParents= true
    this._AdminService.getParentsQuotaionsByFileId(this.FileId).subscribe(data=>{
      this.loadingParents= false
      this.ParentsQuotaions = data;
      console.log(data);
      
    },error=>{
      this.loadingParents= false
      console.log(error);
    })
  }
    // Kids
  getKidsQuotaionsByFileId(){
    this.loadingKids= true
    this._AdminService.getKidsQuotaionsByFileId(this.FileId).subscribe(data=>{
      this.loadingKids= false
      this.KidsQuotaions = data;
      console.log(data);
    },error=>{
      this.loadingKids= false
      console.log(error);
      
    })
  }


  ngOnInit(): void {
    this.getParentsQuotaionsByFileId();
    this.getKidsQuotaionsByFileId();
  }
}
