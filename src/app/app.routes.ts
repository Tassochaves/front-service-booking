import { Routes } from '@angular/router';
import { CompanyDashboardComponent } from './company/pages/company-dashboard/company-dashboard.component';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';
import { SignupCompanyComponent } from './basic/components/signup-company/signup-company.component';

export const routes: Routes = [
  {path: "register_client", component: SignupClientComponent},
  {path: "register_company", component: SignupCompanyComponent},
  {path: "company", component: CompanyDashboardComponent}
];
