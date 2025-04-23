import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
AllStudent: any = [
    {fullName:'Aya Essam',Email:'aya12@gmail.com', id:'37657485'},
    {fullName:'Rania Adel',Email:'rania25@gmail.com', id:'4565657485'},
    {fullName:'Lama Ashraf',Email:'lama12@gmail.com', id:'96357485'},
    {fullName:'Ahmed Samy',Email:'ahmed2d@gmail.com', id:'67657485'},
  ]
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes = [5, 8, 10, 15, 20];
  term: any;
  loading: boolean = false
  ErrorMsg: any = ''
  constructor() {}

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
