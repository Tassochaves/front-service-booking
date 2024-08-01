import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyDashboardComponent } from './company/pages/company-dashboard/company-dashboard.component';

export const routes: Routes = [
    
    {path: "company", component: CompanyDashboardComponent}
];
