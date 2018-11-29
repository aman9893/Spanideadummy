import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { RouterModule } from '@angular/router';
 import { ROUTING } from './app-routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './other-module/material';
import { AddEmpolyeeComponent } from './protected-component/Empolyee-Management/add-empolyee/add-empolyee.component';
import { DeleteEmpolyeeComponent } from './protected-component/Empolyee-Management/delete-empolyee/delete-empolyee.component';
import { DetailsEmpolyeeComponent } from './protected-component/Empolyee-Management/details-empolyee/details-empolyee.component';
import { ListEmpolyeeComponent } from './protected-component/Empolyee-Management/list-empolyee/list-empolyee.component';
import { AddEmpDocumentComponent } from './protected-component/Empolyee-Management/Document/add-emp-document/add-emp-document.component';
import { DetailsEmpDocumentComponent } from './protected-component/Empolyee-Management/Document/details-emp-document/details-emp-document.component';
import { DeleteEmpDocumentComponent } from './protected-component/Empolyee-Management/Document/delete-emp-document/delete-emp-document.component';
import { LoginComponent } from './non-protected-component/Login-Register-onbording/login/login.component';
import { RegisterComponent } from './non-protected-component/Login-Register-onbording/register/register.component';
import { MyauthService } from './Auth-service/authservice';
import { AuthGuard } from './Auth-service/auth.guard';
import { DashboardComponent } from './protected-component/Dashboard/dashboard/dashboard.component';
import { EmpManagementHeaderComponent } from './protected-component/Empolyee-Management/emp-management-header/emp-management-header.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';
@NgModule({
  declarations: [
    AppComponent,
    AddEmpolyeeComponent,
    DeleteEmpolyeeComponent,
    DetailsEmpolyeeComponent,
    ListEmpolyeeComponent,
    AddEmpDocumentComponent,
    DetailsEmpDocumentComponent,
    DeleteEmpDocumentComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EmpManagementHeaderComponent,

  ],
  imports: [
    MaterialModule,BrowserAnimationsModule,ROUTING,
    BrowserModule, HttpClientModule,
    FormsModule,Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  entryComponents :[ AddEmpolyeeComponent
  ,DeleteEmpolyeeComponent,AddEmpDocumentComponent
  
  
  
  ],
  providers: [MyauthService,AuthGuard,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
