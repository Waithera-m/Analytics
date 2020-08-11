import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color,Label } from 'ng2-charts';
import { Single } from '../../models/single';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationserviceService } from '../../services/authenticationservice.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  single: Single;
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions;
  lineChartColors: Color[];
  lineChartLegend: boolean;
  lineChartType: string;
  lineChartPlugins;

  constructor(public authService: AuthenticationserviceService, public http: HttpClient, public dataService: DataService) { 
    this.single = this.dataService.single;
    this.dataService.requestResponse();
  }

  ngOnInit(): void {
    let authorization = this.authService.getAuthorizationToken();
    let authorizationData = 'Bearer ' + authorization;
    let url = 'https://api.demo.reja.ai/analytics/summary?client_id=3&span=30days';
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
      
        
      var text = [];
      for (let i = 0; i < len; i++) {
          text.push(this.single[i]['transactions']);
          
      }

      var label = [];
      for (let i = 0; i < len; i++) {
        label.push(this.single[i]['date']);
      }

      var date = label;

      var transactions = text;
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
