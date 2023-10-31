import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any> {
    // Replace with your actual API endpoint
    const url = 'http://your-api-endpoint/reservations';
    return this.http.get<any>(url);
  }
}