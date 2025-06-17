import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ForbiddenComponent } from './components/shared/forbidden/forbidden.component';
import { BooksComponent } from './components/admin/books/books.component';
import { LibraryLoanComponent } from './components/admin/library-loan/library-loan.component';
import { StudentsComponent } from './components/admin/students/students.component';
import { HasRoleGuard } from './guards/has-role.guard';
import { StuBooksComponent } from './components/student/stu-books/stu-books.component';
import { LandingPageComponent } from './components/shared/landing-page/landing-page.component';



const routes: Routes = [

  // {
  //   path:'Users',
  //   canActivate:[HasRoleGuard],
  //   data:["Admin"],
  //   component:UsersComponent 
  // },
  {path:'',component:LandingPageComponent },
  {path:'login',component:LoginComponent },
  {path:'LandingPage',component:LandingPageComponent },
  // Admin
  {path:'signup',canActivate:[HasRoleGuard,AuthGuard],data:["admin"],component:SignUpComponent },
  {path:'AdminDashboard',canActivate:[AuthGuard],component:DashboardComponent },
  {path:'Books',canActivate:[HasRoleGuard,AuthGuard],data:["admin"],component:BooksComponent },
  {path:'LibraryLoan',canActivate:[HasRoleGuard,AuthGuard],data:["admin"],component:LibraryLoanComponent },
  {path:'Students',canActivate:[HasRoleGuard,AuthGuard],data:["admin"],component:StudentsComponent },
  // Student
  {path:'StuBooks',canActivate:[HasRoleGuard,AuthGuard],data:["student"],component:StuBooksComponent },
  {path:'**',canActivate:[AuthGuard],component:ForbiddenComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
