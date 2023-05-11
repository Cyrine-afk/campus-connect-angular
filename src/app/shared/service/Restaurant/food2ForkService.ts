import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { routes } from '../routes/routes';
import { Subject, Observable,BehaviorSubject,map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Food2ForkService {
  private apiUrl = 'https://fitness-calculator.p.rapidapi.com/bodyfat';

  constructor(private http: HttpClient) { }

  calculateDailyCalorie(age: number, gender: string, weight: number, height: number, activityLevel: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'dd5d838aebmshb4ca8f7441fcb2ep15e06ajsncc276ed9fb8d',
      'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
    });

    const params = new HttpParams()
      .set('age', age.toString())
      .set('gender', gender)
      .set('weight', weight.toString())
      .set('height', height.toString())
      .set('activitylevel', activityLevel);

    return this.http.get(this.apiUrl, { headers: headers, params: params });
}
}

