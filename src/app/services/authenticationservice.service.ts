import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  errorData: {};  

  constructor(
    
    private http: HttpClient,
  ) { }

  redirectUrl: string;


  login(email: string, dashboard_id: string, password: string) {
    return this.http.get('https://api.demo.reja.ai/auth?email=' + email + '&dashboard_id=' + dashboard_id + '&password=' + password).pipe(map(user => {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      
    }), catchError(this.handleError)
    );
  }

  isLoggedIn(){
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.access_token;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {

      
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
