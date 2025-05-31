import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-library-loan',
  templateUrl: './library-loan.component.html',
  styleUrls: ['./library-loan.component.scss']
})
export class LibraryLoanComponent {
isClicked:boolean= false
  isClicked2:boolean= false
  loading:boolean= false
  brokerCustomers:any
  BrokerIdVal:any =''
  TotalMony:number = 0
  AllItems:any[]=[
    {student:'Omar Ali', order:'TN Novel' , date:'26-05-2025'},
    {student:'Esaam Ahmed', order:'Taha Hussin Book' , date:'01-04-2025'},
    {student:'Sara Hesham', order:'Agatha Kristi' , date:'15-04-2025'},
    {student:'Tamer Mohsen', order:'Vouture Book' , date:'18-04-2025'},
    {student:'Hussam Ali', order:'Agatha Kristi' , date:'20-04-2025'},
  ]
  PortflioCollections:any
 
  constructor(private _ToastrService:ToastrService, private _Router:Router,private _AdminService:AdminService){}


  SearchForm:FormGroup = new FormGroup({
    'code':new FormControl(''),
    'Insured':new FormControl(''),
    'From':new FormControl(''),
    'To':new FormControl(''),
    'Decision':new FormControl('pending'),
  })

  ArrTest:any[]=[];
  getApproveDecision(id:any,target:any){

    let Exist= this.ArrTest.find(item=>item.request_id ==id)
    
    if(Exist==undefined){
      if(target.value==''){
      }else{
        let Model= {
          request_id:id,
          status:target.value
        }
        this.ArrTest.push(Model)
      }
    }else{
      if(target.value==''){
        let Index = this.ArrTest.indexOf(Exist)
        this.ArrTest.splice(Index,1)
      }else{
        let Model= {
          request_id:id,
          status:target.value
        }
        let Index = this.ArrTest.indexOf(Exist)
        this.ArrTest.splice(Index,1)
        this.ArrTest.push(Model)
      }
    }
    console.log(this.ArrTest);
    if(target.value == '1'){
      target.style.backgroundColor = '#E2F2E9';
    }else if(target.value == '0'){
      target.style.backgroundColor = '#FBECEC';
    }else{
      target.style.backgroundColor = '#FFF';
    }
    if(this.ArrTest.length==0){
      $('#Save').hide(300)
    }else{
      $('#Save').show(300)
    }
    console.log(this.ArrTest);
    
  }

  ///////////////////  Sumbit Portfolios //////////////
SumbitPortfolios(){
  this._AdminService.BorrowDecision(this.ArrTest).subscribe((res:any)=>{
      this.isClicked = false;

      this.getAllPendingRequests();
        this._ToastrService.success('Done Successfully')
    }, error => {
      this.isClicked = false;
  }) 
  
}
  getAllPendingRequests(){
    this.loading = true
    this._AdminService.getAdminPending().subscribe((res:any)=>{
      this.loading = false
      this.AllItems = res.records;
      this.loading = false;
      console.log(this.AllItems); 
    }, error => {
      this.loading = false
  })
  }
  ngOnInit() {
    this.getAllPendingRequests()
  }
}
