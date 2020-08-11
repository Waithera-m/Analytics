import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color,Label } from 'ng2-charts';
import { Single } from '../../models/single';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationserviceService } from '../../services/authenticationservice.service';
import { DataService } from '../../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-onetwenty-customers',
  templateUrl: './onetwenty-customers.component.html',
  styleUrls: ['./onetwenty-customers.component.css']
})
export class OnetwentyCustomersComponent implements OnInit {

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
    let url = `${environment.oneTwentyUrl}`;
    let headerOptions = new HttpHeaders().set('Authorization', authorizationData);
    this.http.get<any>(url, { headers: headerOptions }).subscribe(data => {
      this.single = data;
      console.log(this.single[0]['customers']);
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
          text.push(this.single[i]['customers']);
          
      }

      var label = [];
      for (let i = 0; i < len; i++) {
        label.push(this.single[i]['date']);
      }

      var date = label;

      var customers = text;
      this.lineChartData = [{data: customers, label: 'Customers'},];
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
