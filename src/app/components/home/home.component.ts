import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationserviceService }  from '../../services/authenticationservice.service';
import { DataService }  from '../../services/data.service';

import { Single } from '../../models/single';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  singles:Single [];
  single: Single;
  sumTransactions;
  sumCustomers;
  sumRevenue;

  constructor(public http: HttpClient, public authService: AuthenticationserviceService, public dataService: DataService) {

    this.dataService.requestResponse();
    this.single = this.dataService.single;
    
    
    
   }

   
  
  
  

  ngOnInit(): void {
    let authorization = this.authService.getAuthorizationToken();
    let authorizationData = 'Bearer ' + authorization;
    let url = `${environment.thirtyUrl}`;
    let headerOptions = new HttpHeaders().set('Authorization', authorizationData);
    this.http.get<any>(url, { headers: headerOptions }).subscribe(data => {
      this.single = data;
      
      function countProperties (obj) {
        var count = 0;
    
        for (var property in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, property)) {
                count++;
            }
        }
    
        return count;
      }
      var len = countProperties(this.single);
      
        
      var text = [];
      for (let i = 0; i < len; i++) {
          text.push(this.single[i]['transactions']);
          
      }

      var revenue = [];
      for (let i = 0; i < len; i++) {
        revenue.push(this.single[i]['revenue']);
        
      }

      var customers = [];
      for (let i = 0; i < len; i++) {
        customers.push(this.single[i]['customers']);
        
      }

      this.sumTransactions = text.reduce(function(a,b){return a + b}, 0);
      this.sumRevenue = revenue.reduce(function(a,b){return a + b}, 0);
      this.sumCustomers = customers.reduce(function(a,b){return a + b}, 0);
      

    })
  }

}
