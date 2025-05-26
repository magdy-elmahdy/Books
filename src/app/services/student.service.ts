import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseURL:any='http://51.20.126.142:4000/';
  constructor(private _HttpClient:HttpClient) { }
  register(Model:any){
    return this._HttpClient.post(this.baseURL+'users/register' , Model);
  }
  getAllStudents(){
    return this._HttpClient.get(this.baseURL+'users/students');
  }
}
