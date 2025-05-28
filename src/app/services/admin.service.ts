import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL:any='http://51.20.126.142:4000/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }



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

  // Get Pending Requests
  getPendingRequests(){
    return this._HttpClient.get(this.baseURL+'borrowed_books/borrow-decision/pending',this.configGet)
  }

  // Borrow Decision
  BorrowDecision(body:any){
    return this._HttpClient.post(this.baseURL+'borrowed_books/borrow-decision',body)
  }





  // Get All Schools
  getAllSchools(){
    return this._HttpClient.get(this.baseURL+'Schools/GetAll',this.configGet)
  }

  // Get All Parents
  getAllParents(){
    return this._HttpClient.get(this.baseURL+'Parent/GetAllParent',this.configGet)
  }

  getKidsByParentId(id:any){
    return this._HttpClient.get(this.baseURL+'Kids/GetKidsByParentId?parentId='+id,this.configGet)
  }

  // Get All Kids
  getAllKids(){
    return this._HttpClient.get(this.baseURL+'Kids/GetAllKids',this.configGet)
  }

  


  //edit School 
  editSchool(body:any){
    return this._HttpClient.put(this.baseURL+'Schools/EditSchools',body)
  }

  // Get All Quotaions
  getAllQuotaions(){
    return this._HttpClient.get(this.baseURL+'Quotation/GetAllQuotation', this.configGet)
  }

  // Download file Templete
  public getTempleteFile(){
    return this._HttpClient.get(this.baseURL+'File/DownloadFile',{observe:'response',
    responseType: 'blob',headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")})
  }


  // Qoutaions Of Parents
  getParentsQuotaionsByFileId(id:any){
  return this._HttpClient.get(this.baseURL+'Quotation/GetQuotatiopnForEveryParent?FileId='+id, this.configGet)
  }

  // Qoutaions Of Parents
  getKidsQuotaionsByFileId(id:any){
  return this._HttpClient.get(this.baseURL+'Quotation/GetQuotaionForEveryKid?FileId='+id, this.configGet)
  }
}
