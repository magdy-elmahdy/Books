import { DatePipe } from '@angular/common';
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
  styleUrls: ['./books.component.scss'],
  providers:[DatePipe]
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
  SelectedItem: any='';
  ErrorMsg: any = ''
  constructor( private _ActivatedRoute: ActivatedRoute ,private _DatePipe:DatePipe,
     private _AdminService:AdminService, private _ToastrService:ToastrService) {}
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
  OpenEditModel(){
    this.Form.patchValue({
      title:this.SelectedItem.title,
      author:this.SelectedItem.author,
      isbn:this.SelectedItem.isbn,
      barcode:this.SelectedItem.barcode,
      publisher:this.SelectedItem.publisher,
      quantity:this.SelectedItem.quantity,
      availability:this.SelectedItem.availability,
      published_date:this._DatePipe.transform(this.SelectedItem.published_date,'YYYY-MM-dd'),
      
    })
  }
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
  ManageBook(){
    this.isClicked =true
    if(this.SelectedItem==''){
        this.SubmitAddBook()
    }else{
      this.SubmitEditBook()
    }
  }
  SubmitAddBook(){
        console.log(this.Form.value);
        this._AdminService.AddBook(this.Form.value).subscribe((res:any)=>{
          console.log(res);
          this.getAllBooks();
          $("#AddModal").modal('toggle')
  
          this.isClicked =false
        this._ToastrService.success('Book added Successfully')
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
  SubmitEditBook(){
    this._AdminService.EditBook(this.SelectedItem.book_id ,this.Form.value).subscribe((res:any)=>{
          console.log(res);
          this.getAllBooks();
          $("#AddModal").modal('toggle');
          $('.Edit').toggle(500)
          this.isClicked =false
        this._ToastrService.success('Book Edited Successfully')
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
  toggleEdit(){
     $('.Edit').toggle(500)
  }
  SubmitDelete(){
        this.isClicked =true
        console.log(this.SelectedItem);
        
        this._AdminService.DeleteBook(this.SelectedItem?.book_id).subscribe((res:any)=>{
          console.log(res);
          this.getAllBooks();
          $("#DeleteModal").modal('toggle')
          $('.Delete').toggle(500)
  
          this.isClicked =false
        this._ToastrService.success('Book Deleted Successfully')
        },error=>{
          this.isClicked =false
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          })
        })
      }
  
  ngOnInit(): void {
    this.getAllBooks()
  }


}
