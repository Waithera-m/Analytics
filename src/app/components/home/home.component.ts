import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationserviceService }  from '../../services/authenticationservice.service';
import { DataService }  from '../../services/data.service';

import { Single } from '../../models/single';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  singles:Single [];
  single: Single;

  constructor(public http: HttpClient, public authService: AuthenticationserviceService, public dataService: DataService) {

    this.dataService.requestResponse();
    this.single = this.dataService.single;
    
    
    
   }

   
  
  
  

  ngOnInit(): void {
    
  }

}
