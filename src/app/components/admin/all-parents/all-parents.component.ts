import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-parents',
  templateUrl: './all-parents.component.html',
  styleUrls: ['./all-parents.component.scss']
})
export class AllParentsComponent implements OnInit{
  AllParents:any=[]
  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes=[5,8,10,15,20];
  term:any;
  parentId:any;
  loading:boolean=false
  constructor(private _AdminService:AdminService){
  }

    // Get All Parents
  getAllParents(){
    this.loading=true
    this._AdminService.getAllParents().subscribe(data=>{
      this.loading=false
      this.AllParents=data
    })
  }

    // Delete Parent By Id
  deleteParentById(id:any){
    Swal.fire({
      title: 'Are you sure?',text: "You won't be able to revert this!",icon: 'warning',showCancelButton: true,
      confirmButtonColor: '#3085d6',cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._AdminService.deleteParentById(id).subscribe((res:any)=>{
          console.log(res);
          
          this.getAllParents()
          Swal.fire('Deleted!',res.parentName+' has been deleted successfully','success')
        },error=>{
          console.log(error);
          Swal.fire({icon: 'error',title: 'Oops...',text: error.error,})
        })
      }
    })
  }

    // Get Kid of Parent By Parent Id
  getKidsByParentId(id:any){
    this._AdminService.getKidsByParentId(id).subscribe(data=>{
      console.log(data);
    })
  }

              //Pagination Methods
  onTableDataChange(event:any){
    this.page=event;
    this.getAllParents();
  }
  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.getAllParents();
  }
  ngOnInit(): void {
    this.getAllParents()
  }
}
