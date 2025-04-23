import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-all-kids',
  templateUrl: './all-kids.component.html',
  styleUrls: ['./all-kids.component.scss']
})
export class AllKidsComponent implements OnInit{
  AllKids:any=['Ahmed','Mohamed','Ali']
  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes=[5,8,10,15,20];
  term:any;
  loading:boolean=false
  kidName:any
  schoolId:any
  feesVal:any
  gradeVal:any
  kidIdEdit:any
  parentIdEdit:any
  AllSchools:any[]=[]
  parentId:any
  ErrorMsg:any=''
  constructor(private _AdminService:AdminService,private _ActivatedRoute:ActivatedRoute){
    this.parentId= this._ActivatedRoute.snapshot.paramMap.get('id')
    if(this.parentId!=null){
      this.getKidsByParentId(this.parentId);
    }else{
      this.getAllKids()
    }
  }

    // Get Kid of Parent By Parent Id
  getKidsByParentId(id:any){
    this._AdminService.getKidsByParentId(id).subscribe(data=>{
      this.AllKids=data;
      console.log(data);
      
    },error=>{
      this.ErrorMsg=error.error
      Swal.fire({
        icon: 'error',
        title: error.error
      })
    })
  }
    // Get All Kids
  getAllKids(){
    this.loading=true
    this._AdminService.getAllKids().subscribe(data=>{
    this.loading=false
      this.AllKids=data;
      console.log(data);
      
    },error=>{
      this.loading=true
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
    })
  }

    // Delete Kid By Id
  deleteKidById(id:any){
    Swal.fire({
      title: 'Are you sure?',text: "You won't be able to revert this!",icon: 'warning',showCancelButton: true,
      confirmButtonColor: '#3085d6',cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._AdminService.deleteKidById(id).subscribe((res:any)=>{
          this.getAllKids()
          Swal.fire('Deleted!',res.kidsName+' has been deleted.','success')
        },error=>{

          console.log(error);
          Swal.fire({icon: 'error',title: 'Oops...',text: error.error,})
        })
      }
    })
  }

  getKidInfoToEdit(kid:any){
    console.log(kid);
    this.kidName=kid.kidsName
    this.schoolId=String(kid.schoolsId)
    this.feesVal=String(kid.fees )
    this.gradeVal=String(kid.grade);
    this.kidIdEdit=kid.kidsId
    this.parentIdEdit=kid.parentId
  }
    // Submit Edit Kid
  SubmitEditKid(){
    // let exsit = this.AllSchools.find(item=>item.schoolsId==Number(this.schoolId))
    let Model={
      kidsId:this.kidIdEdit,
      parentId:this.parentIdEdit,
      kidsName:this.kidName,
      schoolsId:Number(this.schoolId),
      fees:Number(this.feesVal),
      grade:Number(this.gradeVal)
    }
    console.log(Model);
    
    this._AdminService.editKid(Model).subscribe((res:any)=>{
      this.getAllKids()
      $("#editKid").modal('toggle')
      Swal.fire('Good Job!', res.kidsName+" Edited Successfully",'success')
    },error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
    })
  }

  getllSchools(){
    this._AdminService.getAllSchools().subscribe((data:any)=>{
      this.AllSchools=data
    })
  }
              //Pagination Methods
  onTableDataChange(event:any){
    this.page=event;
    this.getAllKids();
  }
  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.getAllKids();
  }
  ngOnInit(): void {
  }
}
