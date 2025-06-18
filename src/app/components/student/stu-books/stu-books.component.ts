import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
declare var $: any

@Component({
  selector: 'app-stu-books',
  templateUrl: './stu-books.component.html',
  styleUrls: ['./stu-books.component.scss']
})
export class StuBooksComponent {
AllItems: any = []
  search1: string = '';
  search2: string = '';
  search3: string = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes = [5, 8, 10, 15, 20];
  term: any;
  loading: boolean = false;
  isCliked: boolean = false;
  selectedItem: any = ''
  CurrentDate:Date = new Date()
  constructor( private _ActivatedRoute: ActivatedRoute ,private _StudentService:StudentService, private _ToastrService:ToastrService,
    public _AuthService:AuthService
  ) {}
  toggleDelete(){
     $('.Delete').toggle(500)
  }
  //Pagination Methods
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  // Submit Borrow Request
  BorrowRequest(){
    this.isCliked = true
    let Model ={
      student_id: localStorage.getItem('BooksId'),
      isbn: this.selectedItem.isbn,
      request_start_date:this.CurrentDate
    }
    console.log(Model);
    
    this._StudentService.BorrowRequest(Model).subscribe((res:any)=>{
      this.isCliked = false;

      this.getAllStudentBooksWithItsStatus();
        $("#BorrowModal").modal('toggle')
        this._ToastrService.success('Requested Successfully')
    }, error => {
      this.isCliked = false;
  }) 
  }
  getAllStudentBooksWithItsStatus(){
    this.loading = true
    this._StudentService.Avilablebooks().subscribe((res:any)=>{
      this.loading = false
      this.AllItems = res
      this.loading = false;
      console.log(this.AllItems); 
    }, error => {
      this.loading = false
  })
  }
  ngOnInit(): void {
    this.getAllStudentBooksWithItsStatus();
  }
}
