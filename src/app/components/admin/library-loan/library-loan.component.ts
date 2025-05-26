import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
import { ToastrService } from 'ngx-toastr';
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
  AllPortfolio:any[]=[
    {student:'Omar Ali', order:'TN Novel' , date:'26-05-2025'},
    {student:'Esaam Ahmed', order:'Taha Hussin Book' , date:'01-04-2025'},
    {student:'Sara Hesham', order:'Agatha Kristi' , date:'15-04-2025'},
    {student:'Tamer Mohsen', order:'Vouture Book' , date:'18-04-2025'},
    {student:'Hussam Ali', order:'Agatha Kristi' , date:'20-04-2025'},
  ]
  PortflioCollections:any
 
  constructor(private _ToastrService:ToastrService, private _Router:Router){}


  SearchForm:FormGroup = new FormGroup({
    'code':new FormControl(''),
    'Insured':new FormControl(''),
    'From':new FormControl(''),
    'To':new FormControl(''),
    'Decision':new FormControl('pending'),
  })

  selectedFile:any = ''
  uploadPaymnetFile(event: any){
    this.selectedFile = event.target.files[0] ?? null;
    event.target.value=''
  }
  ArrTest:any[]=[];
  getApproveDecision(id:any,target:any){

    let Exist= this.ArrTest.find(item=>item.id ==id)
    
    if(Exist==undefined){
      if(target.value==''){
      }else{
        let Model= {
          id:id,
          isApproved :JSON.parse(target.value)
        }
        this.ArrTest.push(Model)
      }
    }else{
      if(target.value==''){
        let Index = this.ArrTest.indexOf(Exist)
        this.ArrTest.splice(Index,1)
      }else{
        let Model= {
          id:id,
          isApproved :JSON.parse(target.value)
        }
        let Index = this.ArrTest.indexOf(Exist)
        this.ArrTest.splice(Index,1)
        this.ArrTest.push(Model)
      }
    }
    console.log(this.ArrTest);
    if(target.value == 'true'){
      target.style.backgroundColor = '#E2F2E9';
    }else if(target.value == 'false'){
      target.style.backgroundColor = '#FBECEC';
    }else{
      target.style.backgroundColor = '#FFF';
    }
    if(this.ArrTest.length==0){
      $('#Save').hide(300)
    }else{
      $('#Save').show(300)
    }
  }

  ///////////////////  Sumbit Portfolios //////////////
SumbitPortfolios(){
  
  
}
getPortflioCollections(collections:any){
  this.PortflioCollections = collections
  console.log(this.PortflioCollections);
  $(".overlayPortflioCollections").fadeIn(300)
  $(".closePortflioCollections").animate({right: '0px'});
}
closePortflioCollections(){
  $(".overlayPortflioCollections").fadeOut(300)
  $(".closePortflioCollections").animate({right: '-30%'});
}

  ngOnInit() {


  }
}
