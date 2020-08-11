import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { RevenueComponent } from './components/revenue/revenue.component';
import { CustomersComponent } from './components/customers/customers.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { NinetycustomersComponent } from './components/ninetycustomers/ninetycustomers.component';
import { NinetyrevenueComponent } from './components/ninetyrevenue/ninetyrevenue.component';
import { NinetytransactionsComponent } from './components/ninetytransactions/ninetytransactions.component';
import { OnetwentyCustomersComponent } from './components/onetwenty-customers/onetwenty-customers.component';
import { OnetwentyTransactionsComponent } from './components/onetwenty-transactions/onetwenty-transactions.component';
import { OnetwentyRevenueComponent } from './components/onetwenty-revenue/onetwenty-revenue.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]},
  {path: 'revenue', component: RevenueComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'ninety-days-customers', component: NinetycustomersComponent},
  {path: 'ninety-days-revenue', component: NinetyrevenueComponent},
  {path: 'ninety-days-transactions', component: NinetytransactionsComponent},
  {path: 'one-eighty-days-customers', component: OnetwentyCustomersComponent},
  {path: 'one-eighty-days-transactions', component: OnetwentyTransactionsComponent},
  {path: 'one-eighty-days-revenue', component: OnetwentyRevenueComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
