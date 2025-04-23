import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { HasRoleGuard } from './guards/has-role.guard';
import { FatherFormComponent } from './components/User/father-form/father-form.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddSchoolComponent } from './components/admin/add-school/add-school.component';
import { AllSchoolsComponent } from './components/admin/all-schools/all-schools.component';
import { KidsFormComponent } from './components/User/kids-form/kids-form.component';
import { QuotationDetailsComponent } from './components/User/quotation-details/quotation-details.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { ProposalFormComponent } from './components/User/proposal-form/proposal-form.component';
import { AllParentsComponent } from './components/admin/all-parents/all-parents.component';
import { AllKidsComponent } from './components/admin/all-kids/all-kids.component';
import { AuthGuard } from './guards/auth.guard';
import { ForbiddenComponent } from './components/shared/forbidden/forbidden.component';
import { RejectionComponent } from './components/User/rejection/rejection.component';
import { QuotaionsOfFileComponent } from './components/admin/quotaions-of-file/quotaions-of-file.component';



const routes: Routes = [

  // {
  //   path:'Users',
  //   canActivate:[HasRoleGuard],
  //   data:["Admin"],
  //   component:UsersComponent 
  // },
  {path:'',component:FatherFormComponent },
  {path:'signup',component:SignUpComponent },
  {path:'login',component:LoginComponent },
  {path:'FatherForm',component:FatherFormComponent },
  {path:'KidsForm/:name/:age/:id',component:KidsFormComponent },
  {path:'AdminDashboard',canActivate:[AuthGuard],component:DashboardComponent },
  {path:'AddSchool',canActivate:[AuthGuard],component:AddSchoolComponent },
  {path:'AllScools',canActivate:[AuthGuard],component:AllSchoolsComponent },
  {path:'AllParents',canActivate:[AuthGuard],component:AllParentsComponent },
  {path:'AllKids',canActivate:[AuthGuard],component:AllKidsComponent},
  {path:'AllKids/:id',canActivate:[AuthGuard],component:AllKidsComponent},
  {path:'QuotaionDetials/:id',component:QuotationDetailsComponent },
  {path:'Reports',canActivate:[AuthGuard],component:ReportsComponent },
  {path:'Proposal/:id',component:ProposalFormComponent },
  {path:'QuotationOfFile/:id',canActivate:[AuthGuard],component:QuotaionsOfFileComponent },
  {path:'Rejection',component:RejectionComponent },
  {path:'**',canActivate:[AuthGuard],component:ForbiddenComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
