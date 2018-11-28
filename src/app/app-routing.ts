import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './non-protected-component/Login-Register-onbording/login/login.component';
import { RegisterComponent } from './non-protected-component/Login-Register-onbording/register/register.component';;
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { DashboardComponent } from './protected-component/Dashboard/dashboard/dashboard.component';
import { ListEmpolyeeComponent } from './protected-component/Empolyee-Management/list-empolyee/list-empolyee.component';
import { DetailsEmpolyeeComponent } from './protected-component/Empolyee-Management/details-empolyee/details-empolyee.component';
import { ListBookComponent } from './protected-component/Libaray-Management/list-book/list-book.component';
import { AdminListEmpolyeeComponent } from './protected-component/Empolyee-Attendance/admin-list-empolyee/admin-list-empolyee.component';
import { EmpolyeeSideListComponent } from './protected-component/Empolyee-Attendance/empolyee-side-list/empolyee-side-list.component';
import { ProjectListComponent } from './protected-component/project-managememt/project-list/project-list.component';

export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'singup', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'empolyee-management', component: ListEmpolyeeComponent },
    { path: 'empolyeeList/:id', component: DetailsEmpolyeeComponent },
    { path: 'library-management', component: ListBookComponent },
    { path: 'admin-live-list', component: AdminListEmpolyeeComponent },
    { path: 'employee-attendance-list', component: EmpolyeeSideListComponent },
    { path: 'project-management', component: ProjectListComponent },

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
