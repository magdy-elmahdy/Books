import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any

@Component({
  selector: 'app-stu-books',
  templateUrl: './stu-books.component.html',
  styleUrls: ['./stu-books.component.scss']
})
export class StuBooksComponent {
AllKids: any = [
    {title:'Basic Linear Algebra.',Author:'B.S. Blyth.',Publisher:'Springer-Verla', Publication:'September 2018',ISBN:'978-3-319-77535-9.',available:'available'},
    {title:'Basic Linear Algebra.',Author:'B.S. Blyth.',Publisher:'Springer-Verla', Publication:'September 2018',ISBN:'978-3-319-77535-9.',available:'not Available'},
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
