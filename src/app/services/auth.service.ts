import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseURL:any='https://245d-197-36-192-67.ngrok-free.app/api/';
  baseURL:any='http://97.74.82.75:5678/';

  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  _JwtHelperService =new JwtHelperService()
  constructor(private _HttpClient:HttpClient) { }

  logInForm(Model:any){
    // this.user = this.getUser(localStorage.getItem('TOKEN')!) 
    return this._HttpClient.post('http://97.74.82.75:9586/api/Users/Login' , Model );
  }


  // IsLoggedIn(){
  //   return !!localStorage.getItem('BooksToken')
  // }


  isLoggedIn(){
    var token = localStorage.getItem("BooksToken");
    return !this._JwtHelperService.isTokenExpired(token);
  }
}
