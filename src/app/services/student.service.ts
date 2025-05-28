import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseURL:any='http://51.20.126.142:4000/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  
  constructor(private _HttpClient:HttpClient) { }
  register(Model:any){
    return this._HttpClient.post(this.baseURL+'users/register' , Model);
  }

  
  // Get All books
  getAllBooks(){
    return this._HttpClient.get(this.baseURL+'books',this.configGet)
  }
  
  // Borrow Request
  BorrowRequest(Body:any){
    return this._HttpClient.post(this.baseURL+'borrowed_books/borrow-request',Body)
  }
  
}
