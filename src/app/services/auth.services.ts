import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private signinUrl = 'http://localhost:8080/api/auth/signin';
  private apiUrl = 'http://localhost:8087';
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient) {
  }

  /*
    signup(username: string, email: string, password: string, role: string[]) {
      const userData = { username, email, password, role };
      return this.http.post(this.signupUrl, userData).pipe(
        tap(response => console.log('Signup success:', response)),
        catchError(error => {
          console.log('Signup error:', error);
          return throwError(error);
        })
      );
    }
  */

  /*
  signin(data:any):Observable<any> {
    return this.http.post(${this.apiUrl}/api/auth/signin,data).pipe(
      tap(result => console.log('signin result:', result)),
      catchError(error => {
        console.error(error);
        return throwError(error);
      })
    );
  }


*/
  signin(data: any): Observable<any> {
    return this.http.post('http://localhost:8087/api/auth/signin', data).pipe(
      tap(result => {
        console.log('signin result:', result);
        const token = (result as { token: string }).token;
        localStorage.setItem(this.TOKEN_KEY, token);
      }),
      catchError(error => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) as string;
  }
}