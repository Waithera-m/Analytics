import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
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
    return this.http.get('https://api.demo.reja.ai/auth?email=hello@intelipro&dashboard_id=interview&password=interview07August').pipe(map(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
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
    return currentUser;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
