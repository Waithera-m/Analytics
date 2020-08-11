import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationserviceService }  from '../services/authenticationservice.service';
import { Single } from '../models/single'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  single:Single;


  constructor(public http: HttpClient, public authService: AuthenticationserviceService) { 
    this.single = new Single(0, 0, "", 0, 0, 0);
    
  }

  requestResponse(){
    interface inteliproResponse {
      year: number;
      day: number;
      date: string;
      customers: number;
      transactions: number;
      revenue: number;
    }
    let authorization = this.authService.getAuthorizationToken();
    let authorizationData = 'Bearer ' + authorization;
    let url = 'https://api.demo.reja.ai/analytics/summary?client_id=3&span=30days';
    let headerOptions = new HttpHeaders().set('Authorization', authorizationData);

    let promise = new Promise((resolve, reject) => {
      this.http.get<inteliproResponse>(url, { headers: headerOptions }).toPromise().then(data => {
        this.single = data
        this.single.year = data.year
        this.single.day = data.day
        this.single.date = data.date
        this.single.customers = data.customers
        this.single.transactions = data.transactions
        this.single.revenue = data.revenue
        // let customers = [];
        // customers.push(this.single.customers);
        // let sumCustomers = customers.reduce(function(a,b){return a + b}, 0);
        
        
        resolve()
        
      }, error => {
        console.log(error)

        reject(error)
      })

    })
    return promise 
     
  };
}
