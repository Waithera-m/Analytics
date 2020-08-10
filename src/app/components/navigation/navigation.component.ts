import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationserviceService } from '../../services/authenticationservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private titleService: Title, private authService: AuthenticationserviceService) { }

  ngOnInit(): void {
  }

  get isLoggedIn() { return this.authService.isLoggedIn();}

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
