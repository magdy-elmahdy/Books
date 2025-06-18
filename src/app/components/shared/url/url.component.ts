import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent {
  curentUrl:any= ''
  constructor(private _Router:Router){
    console.log(localStorage.getItem("url"));
    if(localStorage.getItem("url")==null){
      this.curentUrl = "Server"
    }else{
      this.curentUrl= localStorage.getItem("url");
    }
    
  }
  UrlValue:any='';
  
  async saveUrl(){
    await localStorage.setItem('url',this.UrlValue);
    await localStorage.removeItem('BooksToken');
    await localStorage.removeItem("BooksRole");
    await localStorage.removeItem("BooksId");
    await this._Router.navigate(['/login']);
    window.location.reload();
  }
  async ReSetUrl(){
    await localStorage.removeItem('url')  
    await localStorage.removeItem('BooksToken');
    await localStorage.removeItem("BooksRole");
    await localStorage.removeItem("BooksId");
    await this._Router.navigate(['/login']);
    window.location.reload()
  }
}
