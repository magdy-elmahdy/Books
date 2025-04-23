import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddSchoolComponent } from './components/admin/add-school/add-school.component';
import { AllSchoolsComponent } from './components/admin/all-schools/all-schools.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { AllParentsComponent } from './components/admin/all-parents/all-parents.component';
import { AllKidsComponent } from './components/admin/all-kids/all-kids.component';
import { AuthGuard } from './guards/auth.guard';
import { ForbiddenComponent } from './components/shared/forbidden/forbidden.component';
import { QuotaionsOfFileComponent } from './components/admin/quotaions-of-file/quotaions-of-file.component';
import { BooksComponent } from './components/books/books.component';
import { LibraryLoanComponent } from './components/library-loan/library-loan.component';
import { StudentsComponent } from './components/students/students.component';



const routes: Routes = [

  // {
  //   path:'Users',
  //   canActivate:[HasRoleGuard],
  //   data:["Admin"],
  //   component:UsersComponent 
  // },
  {path:'',component:LoginComponent },
  {path:'signup',component:SignUpComponent },
  {path:'login',component:LoginComponent },
  {path:'AdminDashboard',component:DashboardComponent },
  {path:'AddSchool',canActivate:[AuthGuard],component:AddSchoolComponent },
  {path:'AllScools',canActivate:[AuthGuard],component:AllSchoolsComponent },
  {path:'AllParents',canActivate:[AuthGuard],component:AllParentsComponent },
  {path:'AllKids',canActivate:[AuthGuard],component:AllKidsComponent},
  {path:'AllKids/:id',canActivate:[AuthGuard],component:AllKidsComponent},
  {path:'Reports',canActivate:[AuthGuard],component:ReportsComponent },
  {path:'QuotationOfFile/:id',canActivate:[AuthGuard],component:QuotaionsOfFileComponent },
  {path:'Books',canActivate:[AuthGuard],component:BooksComponent },
  {path:'LibraryLoan',canActivate:[AuthGuard],component:LibraryLoanComponent },
  {path:'Students',canActivate:[AuthGuard],component:StudentsComponent },
  {path:'**',canActivate:[AuthGuard],component:ForbiddenComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
