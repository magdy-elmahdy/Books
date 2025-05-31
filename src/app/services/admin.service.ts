import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL:any='http://51.20.126.142:4000/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  constructor(private _HttpClient:HttpClient) {}



  // Get All books
  getAllBooks(){
    return this._HttpClient.get(this.baseURL+'books',this.configGet)
  }

  // Add Book
  AddBook(Body:any){
    return this._HttpClient.post(this.baseURL+'books',Body,{responseType:'text'})
  }

  

  getAllStudents(){
    return this._HttpClient.get(this.baseURL+'users/students');
  }



  // Borrow Decision
  BorrowDecision(body:any){
    return this._HttpClient.post(this.baseURL+'borrowed_books/borrow-decision',body)
  }

  ////////// Books Categories ///////////
  //  Pending 
  getAdminPending(){
    return this._HttpClient.get(this.baseURL+'borrowed_books/borrow-decision/pending',this.configGet)
  }
  //  Approved 
  getAdminApproved(){
    return this._HttpClient.get(this.baseURL+'borrowed_books/borrow-decision/approved',this.configGet)
  }
  //  Rejected 
  getAdminRejected(){
    return this._HttpClient.get(this.baseURL+'borrowed_books/borrow-decision/rejected',this.configGet)
  }



}
