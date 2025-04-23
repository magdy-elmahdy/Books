import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{
  constructor(private _AdminService:AdminService){}
  
  AllSchools:any=['Mti','NTI','Britith']
  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes=[5,8,10,15,20];
  term:any;
  allQuotaions:any
  loading:boolean=false
  date:any  
  showSpinners:any
  stepHour:any
  showSeconds:any
  disableMinute:any
  defaultTime:any
  minDate:any
  maxDate:any
  disabled:any
  stepMinute:any
  stepSecond:any
  touchUi:any
  enableMeridian:any
  hideTime:any
  getAllQuotaions(){
    this.loading=true
    this._AdminService.getAllQuotaions().subscribe(data=>{
    this.loading=false
      this.allQuotaions=data
      console.log(this.allQuotaions);
    },error=>{
      console.log(error);
      this.loading=true
    })
  }

                //Pagination Methods
  onTableDataChange(event:any){
    this.page=event;
    this.getAllQuotaions()

    // this.getAllCustomer();
  }
  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.getAllQuotaions()

    // this.getAllCustomer();
  }
  Form:FormGroup=new FormGroup({
    timeandDate:new FormControl('')
  })

  ngOnInit(): void {
    this.getAllQuotaions()
  }
}
