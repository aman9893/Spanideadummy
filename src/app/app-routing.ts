import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './non-protected-component/Login-Register-onbording/login/login.component';
import { RegisterComponent } from './non-protected-component/Login-Register-onbording/register/register.component';;
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { DashboardComponent } from './protected-component/Dashboard/dashboard/dashboard.component';
import { ListEmpolyeeComponent } from './protected-component/Empolyee-Management/list-empolyee/list-empolyee.component';
import { DetailsEmpolyeeComponent } from './protected-component/Empolyee-Management/details-empolyee/details-empolyee.component';

export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'singup', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'empolyee-management', component: ListEmpolyeeComponent },
    { path: 'empolyeeList/:id', component: DetailsEmpolyeeComponent },

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
