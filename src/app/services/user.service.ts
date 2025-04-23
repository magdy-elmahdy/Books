import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseURL:any='https://245d-197-36-192-67.ngrok-free.app/api/';
  baseURL:any='http://97.74.82.75:5678/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  
  constructor(private _HttpClient:HttpClient) { }

    // Add Parent
  AddParent(Model:any){
    return this._HttpClient.post(this.baseURL+'Parent/AddParent',Model, this.ConfigPost)
  }

    // Add Kids
  AddKids(Model:any){
    return this._HttpClient.post(this.baseURL+'Kids/AddKids',Model, this.ConfigPost)
  }

  // Get Quotaion 
  getQuotation(id:any){
    return this._HttpClient.get(this.baseURL+'Quotation/GetQuotation?id='+id, this.configGet)
  }
  // Add Proposal
  SaveProposal(Model:any){
    return this._HttpClient.post(this.baseURL+'Proposal/AddProposal',Model, this.ConfigPost)
  }
}
