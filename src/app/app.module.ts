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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    BargraphComponent,
    RevenueComponent,
    CustomersComponent,
    TransactionsComponent
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
