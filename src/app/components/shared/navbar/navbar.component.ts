import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() SideStatus=new EventEmitter()
  constructor(private _Router:Router, public _AuthService:AuthService, private _TranslateService:TranslateService){
    _TranslateService.addLangs(['en', 'ar'])
    _TranslateService.setDefaultLang('en')
  }

  handleSideBar(){
    this.SideStatus.emit()
  }
  async logOut(){
    localStorage.removeItem('BooksToken')
    await this._Router.navigate(['/login']);
    await window.location.reload()
  }


  getLanguage(e:any){
    this._TranslateService.use(e.target.value)
  }
}
