import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
declare var $: any
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  AllItems: any = [
    {title:'Basic Linear Algebra.',Author:'B.S. Blyth.',Publisher:'Springer-Verla', Publication:'September 2018',ISBN:'978-3-319-77535-9.',available:'available'},
    {title:'Basic Linear Algebra.',Author:'B.S. Blyth.',Publisher:'Springer-Verla', Publication:'September 2018',ISBN:'978-3-319-77535-9.',available:'available'},
    {title:'Basic Linear Algebra.',Author:'B.S. Blyth.',Publisher:'Springer-Verla', Publication:'September 2018',ISBN:'978-3-319-77535-9.',available:'available'},
    {title:'Basic Linear Algebra.',Author:'B.S. Blyth.',Publisher:'Springer-Verla', Publication:'September 2018',ISBN:'978-3-319-77535-9.',available:'available'},
  ]
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes = [5, 8, 10, 15, 20];
  term: any;
  loading: boolean = false
  isClicked: boolean = false
  
  ErrorMsg: any = ''
  constructor( private _ActivatedRoute: ActivatedRoute , private _AdminService:AdminService, private _ToastrService:ToastrService) {}
  toggleDelete(){
     $('.Delete').toggle(500)
  }
  Form:FormGroup = new FormGroup({
      'title':new FormControl('',[Validators.required]),
      'author':new FormControl('',[Validators.required]),
      'isbn':new FormControl('',[Validators.required]),
      'barcode':new FormControl('',[Validators.required]),
      'published_date':new FormControl('',[Validators.required]),
      'publisher':new FormControl('',[Validators.required]),
      'quantity':new FormControl('',[Validators.required]),
      'availability':new FormControl('',[Validators.required]),
  });
  //Pagination Methods
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  getAllBooks(){
    this.loading = true
    this._AdminService.getAllBooks().subscribe((res:any)=>{
      this.loading = false
      this.AllItems = res;
      this.loading = false;
      console.log(this.AllItems); 
    }, error => {
      this.loading = false

  })
  }
  SubmitAddBook(){
        this.isClicked =true
        console.log(this.Form.value);
        this._AdminService.AddBook(this.Form.value).subscribe((res:any)=>{
          console.log(res);
          this.getAllBooks();
          $("#AddModal").modal('toggle')
  
          this.isClicked =false
        this._ToastrService.success('Student added Successfully')
        },error=>{
          this.isClicked =false
          console.log(error);
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error,
          })
        })
      }
  ngOnInit(): void {
    this.getAllBooks()
  }


}
