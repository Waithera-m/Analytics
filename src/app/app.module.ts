import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataService } from './services/data.service';
import { AuthenticationserviceService } from './services/authenticationservice.service';
import { BargraphComponent } from './components/bargraph/bargraph.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { CustomersComponent } from './components/customers/customers.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { NinetyrevenueComponent } from './components/ninetyrevenue/ninetyrevenue.component';
import { NinetytransactionsComponent } from './components/ninetytransactions/ninetytransactions.component';
import { NinetycustomersComponent } from './components/ninetycustomers/ninetycustomers.component';
import { OnetwentyCustomersComponent } from './components/onetwenty-customers/onetwenty-customers.component';
import { OnetwentyRevenueComponent } from './components/onetwenty-revenue/onetwenty-revenue.component';
import { OnetwentyTransactionsComponent } from './components/onetwenty-transactions/onetwenty-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    BargraphComponent,
    RevenueComponent,
    CustomersComponent,
    TransactionsComponent,
    NinetyrevenueComponent,
    NinetytransactionsComponent,
    NinetycustomersComponent,
    OnetwentyCustomersComponent,
    OnetwentyRevenueComponent,
    OnetwentyTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [DataService, AuthenticationserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
