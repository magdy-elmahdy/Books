import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
declare var $: any
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  AllKids: any = [
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
  isCliked: boolean = false
  ErrorMsg: any = ''
  constructor( private _ActivatedRoute: ActivatedRoute) {}
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
  ngOnInit(): void {
  }


}
