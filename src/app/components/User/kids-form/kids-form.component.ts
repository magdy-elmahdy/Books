import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { ListsService } from 'src/app/services/lists.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-kids-form',
  templateUrl: './kids-form.component.html',
  styleUrls: ['./kids-form.component.scss']
})
export class KidsFormComponent implements OnInit{
  parentNameVal:any=''
  parentAgeVal:any=''
  kidName:any='';
  schoolId:any
  feesVal:any=''
  termVal:any=''
  arr:any[]=[]
  parentId:any
  parentName:any
  parentAge:any
  AllSchools:any[]=[]
  AllFees:any=0
  isClicked:boolean=false

  constructor(private _ToastrService:ToastrService,private _ListsService:ListsService,private _AdminService:AdminService,private _ActivatedRoute:ActivatedRoute,private _UserService:UserService,private _Router:Router){
    this.parentId=this._ActivatedRoute.snapshot.paramMap.get('id')
    this.parentName=this._ActivatedRoute.snapshot.paramMap.get('name')
    this.parentAge=this._ActivatedRoute.snapshot.paramMap.get('age')
  }
  
  redirectTo(uri: string) {
    this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this._Router.navigate([uri]));
 }
  SubmitAddKids(){
    this.isClicked=true
    let Model = Object.assign({kids:this.arr},{parentId:Number(this.parentId)})
    console.log(Model);
    this._UserService.AddKids(Model).subscribe((res:any)=>{
      this.isClicked=false
      console.log(res);
      if(this.AllFees>5000){
        this._Router.navigate(['Proposal/'+this.parentId])
      }else{
        this._Router.navigate(['QuotaionDetials/'+this.parentId])
      }
      Swal.fire(
        'Good job!',
        'Kids Added Successfully',
        'success'
      )
    },error=>{
      this.isClicked=false
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
      if(error.error=="Parent Not Found"){
        this._Router.navigate(['/FatherForm'])
      }
    })
    
  }
  //
  
  // Add And view Item 
view(){
  let exsit = this.AllSchools.find(item=>item.schoolsId==Number(this.schoolId))
  let Model= {
    kidsName:this.kidName,
    schoolsId:Number(this.schoolId),
    schoolsName:exsit.name,
    fees:Number(this.feesVal),
    grade:Number(this.termVal),
  }
  this.AllFees+=Number(this.feesVal);
  if(this.AllFees>5000){
    this._ToastrService.info('You will answer proposal','Your All Fees Will be '+this.AllFees)
    }else{
      this._ToastrService.show('','Your All Fees Will be '+this.AllFees)
  }

  this.arr.push(Model);
  console.log(this.arr);
  console.log(this.AllFees);

  this.kidName=''
  this.termVal=''
  this.schoolId=''
  this.feesVal=''
}
   //Remove item From Loss Participations List
   remove(index:number){
    this.arr.splice(index, 1)
    this.getTotal()
    if(this.AllFees>5000){
    this._ToastrService.info('You will answer proposal','Your All Fees Will be '+this.AllFees)
    }else{
      this._ToastrService.show('','Your All Fees Will be '+this.AllFees)
    }

  }
  getllSchools(){
    this._AdminService.getAllSchools().subscribe((data:any)=>{
      this.AllSchools=data
      console.log(data);
    })
  }
  // getFees(){
  //   this._ListsService.getFeesList().subscribe(data=>{
  //     this.AllFees=data
  //     console.log(data);
  //   })
  // }
  getTotal(){
    this.AllFees=0;
    for(let i in this.arr){
      this.AllFees+=this.arr[i].fees
    }
  }


  // testing
  user:any={id:11,value:'ali'}
  testFunction(){
    const data = JSON.stringify({
      description: Number(15),
    })
    const fd = new FormData();
    // append directly as part of the postData in plain text
    // fd.append('data', Object.fromEntries(data));
    
    console.log(fd.get('data')); // [key, value]

    
  }

  //




  ngOnInit(): void {
    this.getllSchools()
    // this.getFees()
  }
}
