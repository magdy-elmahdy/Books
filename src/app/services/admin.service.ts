import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  url:any = localStorage.getItem('url')
  baseURL:any
  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('url')==null){
      this.baseURL = environment.baseUrl
    }else{
      this.baseURL = ''
      this.baseURL = 'https://'+localStorage.getItem('url')
    }
  }



  // Get All books
  getAllBooks(){
    return this._HttpClient.get(this.baseURL+'books',this.configGet)
  }

  // Add Book
  AddBook(Body:any){
    return this._HttpClient.post(this.baseURL+'books',Body,{responseType:'text'})
  }

  // Edit Book
  EditBook(id:any ,Body:any){
    return this._HttpClient.put(this.baseURL+'books/'+id,Body,{responseType:'text'})
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





  //  Delete Book 
  DeleteBook(id:any){
    return this._HttpClient.delete(this.baseURL+'books/'+id,this.configGet)
  }



}
