import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LottieModule} from 'ngx-lottie';
import { NgxPaginationModule } from 'ngx-pagination';
import player from 'lottie-web';
import { MaterialsModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { SearchPipe } from './pipes/search.pipe';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { StudentsComponent } from './components/admin/students/students.component';
import { BooksComponent } from './components/admin/books/books.component';
import { LibraryLoanComponent } from './components/admin/library-loan/library-loan.component';
import { StuBooksComponent } from './components/student/stu-books/stu-books.component';
import { LandingPageComponent } from './components/shared/landing-page/landing-page.component';
import { UrlComponent } from './components/shared/url/url.component';
import { SearchStudentPipe } from './pipes/search-student.pipe';
export function playerFactory(){
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SpinnerComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    SignUpComponent,
    SearchPipe,
    DashboardComponent,
    StudentsComponent,
    BooksComponent,
    LibraryLoanComponent,
    StuBooksComponent,
    LandingPageComponent,
    UrlComponent,
    SearchPipe,
    SearchStudentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    LottieModule.forRoot({player:playerFactory}),
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    Ng2TelInputModule,
    ToastrModule.forRoot({
      progressBar:true,
      progressAnimation:'decreasing',
      timeOut: 4000
    }),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatIconModule,
    NgxMatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      }) 
  
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
