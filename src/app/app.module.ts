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
import { AddEmpSalaryComponent } from './protected-component/Empolyee-Management/Salary/add-emp-salary/add-emp-salary.component';
import { AddDeleteSalaryComponent } from './protected-component/Empolyee-Management/Salary/add-delete-salary/add-delete-salary.component';
import { AddDetailsSalaryComponent } from './protected-component/Empolyee-Management/Salary/add-details-salary/add-details-salary.component';
import { AddEmpDocumentComponent } from './protected-component/Empolyee-Management/Document/add-emp-document/add-emp-document.component';
import { DetailsEmpDocumentComponent } from './protected-component/Empolyee-Management/Document/details-emp-document/details-emp-document.component';
import { DeleteEmpDocumentComponent } from './protected-component/Empolyee-Management/Document/delete-emp-document/delete-emp-document.component';
import { AddTimelineInfoComponent } from './protected-component/Empolyee-Management/Emp-timeline/add-timeline-info/add-timeline-info.component';
import { DetailsTimelineInfoComponent } from './protected-component/Empolyee-Management/Emp-timeline/details-timeline-info/details-timeline-info.component';
import { EmolyeepHeaderComponent } from './protected-component/Empolyee-Management/emolyeep-header/emolyeep-header.component';
import { AddBlogComponent } from './protected-component/Blog-Management/add-blog/add-blog.component';
import { DeleteBlogComponent } from './protected-component/Blog-Management/delete-blog/delete-blog.component';
import { DetailsBlogComponent } from './protected-component/Blog-Management/details-blog/details-blog.component';
import { ListBlogComponent } from './protected-component/Blog-Management/list-blog/list-blog.component';
import { HeaderBlogComponent } from './protected-component/Blog-Management/header-blog/header-blog.component';
import { AddBookComponent } from './protected-component/Libaray-Management/add-book/add-book.component';
import { DeleteBookComponent } from './protected-component/Libaray-Management/delete-book/delete-book.component';
import { DetailsBookComponent } from './protected-component/Libaray-Management/details-book/details-book.component';
import { ListBookComponent } from './protected-component/Libaray-Management/list-book/list-book.component';
import { HeaderBooksComponent } from './protected-component/Libaray-Management/header-books/header-books.component';
import { AddTaskComponent } from './protected-component/Task-Management/add-task/add-task.component';
import { DeleteTaskComponent } from './protected-component/Task-Management/delete-task/delete-task.component';
import { ListTaskComponent } from './protected-component/Task-Management/list-task/list-task.component';
import { AdminListEmpolyeeComponent } from './protected-component/Empolyee-Attendance/admin-list-empolyee/admin-list-empolyee.component';
import { EmpolyeeSideListComponent } from './protected-component/Empolyee-Attendance/empolyee-side-list/empolyee-side-list.component';
import { HeaderAdminComponent } from './protected-component/Empolyee-Attendance/header-admin/header-admin.component';
import { HeaderEmployeeComponent } from './protected-component/Empolyee-Attendance/header-employee/header-employee.component';
import { FooterComponent } from './protected-component/Empolyee-Attendance/footer/footer.component';
import { LoginComponent } from './non-protected-component/Login-Register-onbording/login/login.component';
import { RegisterComponent } from './non-protected-component/Login-Register-onbording/register/register.component';
import { OnbordingComponent } from './non-protected-component/Login-Register-onbording/onbording/onbording.component';
import { MyauthService } from './Auth-service/authservice';
import { AuthGuard } from './Auth-service/auth.guard';
import { DashboardComponent } from './protected-component/Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './protected-component/header/header.component';
import { EmpManagementHeaderComponent } from './protected-component/Empolyee-Management/emp-management-header/emp-management-header.component';
import { UpdateBookComponent } from './protected-component/Libaray-Management/update-book/update-book.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmpAttendanceDetailsComponent } from './protected-component/Empolyee-Attendance/emp-attendance-details/emp-attendance-details.component';
import * as moment from 'moment';
import { AddProjectComponent } from './protected-component/project-managememt/add-project/add-project.component';
import { DetailsProjectComponent } from './protected-component/project-managememt/details-project/details-project.component';
import { DeleteProjectComponent } from './protected-component/project-managememt/delete-project/delete-project.component';
import { ProjectHeaderComponent } from './protected-component/project-managememt/project-header/project-header.component';
import { ProjectListComponent } from './protected-component/project-managememt/project-list/project-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmpolyeeComponent,
    DeleteEmpolyeeComponent,
    DetailsEmpolyeeComponent,
    ListEmpolyeeComponent,
    AddEmpSalaryComponent,
    AddDeleteSalaryComponent,
    AddDetailsSalaryComponent,
    AddEmpDocumentComponent,
    DetailsEmpDocumentComponent,
    DeleteEmpDocumentComponent,
    AddTimelineInfoComponent,
    DetailsTimelineInfoComponent,
    EmolyeepHeaderComponent,
    AddBlogComponent,
    DeleteBlogComponent,
    DetailsBlogComponent,
    ListBlogComponent,
    HeaderBlogComponent,
    AddBookComponent,
    DeleteBookComponent,
    DetailsBookComponent,
    ListBookComponent,
    HeaderBooksComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    ListTaskComponent,
    AdminListEmpolyeeComponent,
    EmpolyeeSideListComponent,
    HeaderAdminComponent,
    HeaderEmployeeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    OnbordingComponent,
    DashboardComponent,
    HeaderComponent,
    EmpManagementHeaderComponent,
    UpdateBookComponent,
    EmpAttendanceDetailsComponent,
    AddProjectComponent,
    DetailsProjectComponent,
    DeleteProjectComponent,
    ProjectHeaderComponent,
    ProjectListComponent
  ],
  imports: [
    MaterialModule,BrowserAnimationsModule,ROUTING,
    BrowserModule, HttpClientModule,
    FormsModule,Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  entryComponents :[ AddEmpolyeeComponent,EmpAttendanceDetailsComponent
  ,DeleteEmpolyeeComponent,AddBookComponent,DeleteBookComponent,
  UpdateBookComponent,AddProjectComponent,AddEmpSalaryComponent,AddEmpDocumentComponent
  
  
  
  ],
  providers: [MyauthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
