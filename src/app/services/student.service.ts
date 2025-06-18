import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
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
  register(Model:any){
    return this._HttpClient.post(this.baseURL+'users/register' , Model);
  }
  DeleteStudent(userName:any){
    return this._HttpClient.delete(this.baseURL+'users/delete/'+userName);
  }

  
  // Get All books
  getAllBooks(){
    return this._HttpClient.get(this.baseURL+'books',this.configGet)
  }
  
  // Get All Avilable books
  getAllAvilableBooks(){
    return this._HttpClient.get(this.baseURL+'books/available/'+localStorage.getItem('BooksId'),this.configGet)
  }
   
  // Borrow Request
  BorrowRequest(Body:any){
    return this._HttpClient.post(this.baseURL+'borrowed_books/borrow-request',Body)
  }
   
  // Get AllStudentBooksWithItsStatus(){
  getAllStudentBooksWithItsStatus(){
    return this._HttpClient.get(this.baseURL+'borrowed_books/'+localStorage.getItem('BooksId'),this.configGet)
  }
   
  // Get AllStudentBooksWithItsStatus(){
  Avilablebooks(){
    return this._HttpClient.get(this.baseURL+'books/available/'+localStorage.getItem('BooksId'),this.configGet)
  }

  
}
