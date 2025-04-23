import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-all-schools',
  templateUrl: './all-schools.component.html',
  styleUrls: ['./all-schools.component.scss']
})
export class AllSchoolsComponent implements OnInit{
  AllSchools:any
  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes=[5,8,10,15,20];
  term:any;
  loading:boolean=false
  schoolName:any
  schoolId:any
  constructor(private _AdminService:AdminService,private _Router:Router){}
  
    // Get All Schools
  getllSchools(){
    this.loading=true
    this._AdminService.getAllSchools().subscribe(data=>{
      this.loading=false
      this.AllSchools=data
      console.log(data);
    },error=>{
      console.log(error);
      
    this.loading=true
    })
  }
  getSchoolInfoToEdit(School:any){
    this.schoolId=School.schoolsId
    this.schoolName=School.name
  }
    // Submit Edit School
    SubmitEditSchool(){
    let Model={
      name:this.schoolName,
      schoolsId:this.schoolId
    }
    console.log(Model);
    
    this._AdminService.editSchool(Model).subscribe((res:any)=>{
      this.getllSchools()
      $("#editSchool").modal('toggle')
      Swal.fire('Good Job!', res.name+" Edited Successfully",'success')
    },error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
    })
  }
  FileName:any
  selectedFile:any
  SchoolIdFile:any
  FileExtextion:any
  ValidExtention:boolean=false
  isClickedDocumnet:boolean=false
  // Download Templete File 
  getTempleteFile(){
    this._AdminService.getTempleteFile().subscribe(res=>{
      let blob:Blob = res.body as Blob
      this.FileName= 'SchoolFileFormat.xlsx'
      let a= document.createElement('a');
      a.download=this.FileName
      a.href=window.URL.createObjectURL(blob)
      a.click()
    })
  }

  getSchoolIdToUploadFile(id:any){
    this.SchoolIdFile = id
    console.log(id); 
  }

uploadFile(event: any){
    // Get File Object
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile);

    var myString = this.selectedFile.name
    this.FileExtextion=myString.substring(myString.lastIndexOf(".")+1)
    if(this.selectedFile.size==3000000 || this.FileExtextion.toLocaleLowerCase()=='xlsx'){
      this.ValidExtention = true
    }else{
      this.ValidExtention = false
    }
}
        //Save File
  SaveDocument(){
    this.isClickedDocumnet=true
    var formData = new FormData()
    formData.append('file',this.selectedFile);
    this._AdminService.UploadFile(this.SchoolIdFile,formData ).subscribe(res=>{
      console.log(res);
      this._Router.navigate(['/QuotationOfFile/'+res])
      $("#addDoument").modal('toggle')
      this.isClickedDocumnet=false
      Swal.fire(res+' Uploaded Successfully','','success')
      this.selectedFile=''
      this.ValidExtention = false
    },orror=>{
      Swal.fire({icon: 'error',title: 'Oops...',text:'Something Went Wrong'}  )
      console.log(orror);
      this.isClickedDocumnet=true
    })
  }
  

  deleteSchoolById(id:any){
    Swal.fire({
      title: 'Are you sure?',text: "You won't be able to revert this!",icon: 'warning',showCancelButton: true,
      confirmButtonColor: '#3085d6',cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._AdminService.DeleteSchoolById(id).subscribe(res=>{
          this.getllSchools()
          Swal.fire('Deleted!','Your Kid has been deleted.','success')
        },error=>{
          console.log(error);
          Swal.fire({icon: 'error',title: 'Oops...',text: error.error,})
        })
      }
    })
  }
  // get templete File 

              //Pagination Methods
  onTableDataChange(event:any){
    this.page=event;
    // this.getAllCustomer();
  }
  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    // this.getAllCustomer();
  }
  ngOnInit(): void {
    this.getllSchools()
  }
}
