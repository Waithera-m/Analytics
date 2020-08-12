import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color,Label } from 'ng2-charts';
import { Single } from '../../models/single';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationserviceService } from '../../services/authenticationservice.service';
import { DataService } from '../../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ninetytransactions',
  templateUrl: './ninetytransactions.component.html',
  styleUrls: ['./ninetytransactions.component.css']
})
export class NinetytransactionsComponent implements OnInit {

  single: Single;
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions;
  lineChartColors: Color[];
  lineChartLegend: boolean;
  lineChartType: string;
  lineChartPlugins;
  sumTransactions;
  sumCustomers;
  sumRevenue;

  constructor(public authService: AuthenticationserviceService, public http: HttpClient, public dataService: DataService) { 
    this.single = this.dataService.single;
    this.dataService.requestResponse();
  }

  ngOnInit(): void {
    let authorization = this.authService.getAuthorizationToken();
    let authorizationData = 'Bearer ' + authorization;
    let url = `${environment.ninetyUrl}`;
    let headerOptions = new HttpHeaders().set('Authorization', authorizationData);
    this.http.get<any>(url, { headers: headerOptions }).subscribe(data => {
      this.single = data;
      console.log(this.single[0]['transactions']);
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
      
        
      var transactions = [];
      for (let i = 0; i < len; i++) {
          transactions.push(this.single[i]['transactions']);
          
      }

      var label = [];
      for (let i = 0; i < len; i++) {
        label.push(this.single[i]['date']);
      }

      var date = label;

      var customers = [];
      for (let i = 0; i < len; i++) {
          customers.push(this.single[i]['customers']);
          
      }

      var revenue = [];
      for (let i = 0; i < len; i++) {
        revenue.push(this.single[i]['revenue']);
        
      }

      this.sumTransactions = transactions.reduce(function(a,b){return a + b}, 0);
      this.sumRevenue = revenue.reduce(function(a,b){return a + b}, 0);
      this.sumCustomers = customers.reduce(function(a,b){return a + b}, 0);

      
      this.lineChartData = [{data: transactions, label: 'Transactions'},];
      console.log(this.lineChartData);
      this.lineChartLabels = date;

      this.lineChartOptions = {responsive: true,};
      this.lineChartColors = [{
        borderColor: 'black',
        backgroundColor: 'rgba(37, 40, 218, 0.62)',
      },];

      this.lineChartLegend = true;
      this.lineChartPlugins = [];
      this.lineChartType = 'line';
      
    })
  }

}
