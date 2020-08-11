import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { RevenueComponent } from './components/revenue/revenue.component';
import { CustomersComponent } from './components/customers/customers.component';
import { TransactionsComponent } from './components/transactions/transactions.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'revenue', component: RevenueComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
