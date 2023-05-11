import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignedResponse } from '../models/assigned-response.model';
import { User } from '../models/user.model';
import { userAssigned } from '../models/userAssigned.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  

  private BASE_URL = 'http://localhost:8087/dashboard';

  constructor(private http: HttpClient) { }

  getChambersAndUsersAssigned(): Observable<userAssigned[]> {
    const headers = new HttpHeaders().set('x-header', 'x-value'); // Set additional headers
    return this.http.get<userAssigned[]>(`${this.BASE_URL}/Asigned-Chambers`, { headers });
  }
}
