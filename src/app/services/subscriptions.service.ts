import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  private baseUrl = 'http://localhost:8087/abonnement';
  private chambreUrl = 'http://localhost:8087/chambre'
  options: any;

  constructor(private http: HttpClient) {  }
  
    getAbonnements(): Observable<any> {
      const headers = new HttpHeaders().set('x-header', 'x-value'); // Set additional headers
      return this.http.get<any>(`${this.baseUrl}/retrieve-all-subs/`, { headers });
    }
  
    getSubById(subId: number): Observable<any> {
      const headers = new HttpHeaders().set('x-header', 'x-value'); // Set additional headers
      return this.http.get<any>(`${this.baseUrl}/retrieve-all-subs/${subId}`, { headers });
    }
  
    addSub(Abonnement: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/add-sub`, Abonnement, {
        headers: new HttpHeaders({
          'x-header': 'x-value'
        })
      });
    }
  
    deleteSub(subId: any): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/delete-sub/${subId}`, {
        headers: new HttpHeaders({
          'x-header': 'x-value'
        })
      });
    }
  
  
     modifySub(Abonnement: any): Observable<any> {
    const headers = new HttpHeaders().set('x-header', 'x-value'); // Set additional headers
    return this.http.put<any>(`${this.baseUrl}/modify-sub`, Abonnement, { headers });
  }

    getChambresDisponibles(disponibilite: boolean): Observable<any[]> {
      const url = `${this.chambreUrl}/disponibles/${disponibilite}`;
      return this.http.get<any[]>(url);
    }
    
    findChambersLowerThanPrice(maxPrice: number): Observable<any[]> {
      const url = `${this.chambreUrl}/price/${maxPrice}`;
      return this.http.get<any[]>(url);
    }
  
  }

