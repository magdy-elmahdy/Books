import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  sAurher:any
  constructor(private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedInUser = localStorage.getItem('BooksRole');

  // Check if the user is logged in and has a role
  if (loggedInUser) {
    if (
      loggedInUser === route.data[0]
    ) {
      return true;
    }
  }

  // If no matching role, show an alert and navigate to Forbidden
  // Swal.fire({
  //   icon: 'error',
  //   title: '403',
  //   text: 'You Are Not Allowed To Access That Details',
  // });
  // this._Router.navigate(['/Forbidden']);
  this._Router.navigate(['/login'])
  return false;
    
  }
  
}
