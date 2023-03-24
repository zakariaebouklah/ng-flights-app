import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
    {
      origin: "Oujda",
      destination: "Leipzig",
      flightNumber: 1468,
      departure: new Date('2023-03-05T10:15:23.932Z'),
      arrival: new Date('2023-03-05T14:27:14.436Z'),
      nonstop: false
    },
    {
      origin: "Cairo",
      destination: "Bagdad",
      flightNumber: 11896,
      departure: new Date('2023-03-10T10:07:23.932Z'),
      arrival: new Date('2023-03-10T12:11:14.436Z'),
      nonstop: true
    },
  ]

  constructor(private httpClient: HttpClient) { }

  getFlights(): Observable<any>
  {
    return this.httpClient.get('http://localhost:3000/flights/');
  }

  getFlightByOrgAndDest(org: string, dest: string): Observable<any>
  {
    console.log("here");
    
    return this.httpClient.get(`http://localhost:3000/flights/query/${org}/${dest}`)
  }

  newFlight(flight: Flight): void
  {

  }

  deleteFlight(id: number): void
  {

  }

}
