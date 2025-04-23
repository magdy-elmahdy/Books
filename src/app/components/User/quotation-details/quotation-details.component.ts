import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quotation-details',
  templateUrl: './quotation-details.component.html',
  styleUrls: ['./quotation-details.component.scss']
})
export class QuotationDetailsComponent implements OnInit{
  quotaionId:any
  quotaionDetails:any
  loading:boolean=false
  constructor(private _UserService:UserService,private _ActivatedRoute:ActivatedRoute){
    this.quotaionId= this._ActivatedRoute.snapshot.paramMap.get("id")
    console.log(this.quotaionId );
    
  }
  
  getQuotationDetails(){
    this.loading=true
    this._UserService.getQuotation(Number(this.quotaionId)).subscribe((res:any)=>{
      this.loading=false
      this.quotaionDetails=res
      console.log(this.quotaionDetails);
    },error=>{
      this.loading=true
      console.log(error);
    })
  }


  ngOnInit(): void {
    this.getQuotationDetails()
  }
}
