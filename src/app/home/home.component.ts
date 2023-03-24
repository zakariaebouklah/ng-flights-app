import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  flights: Flight[] = []; 

  isClicked: boolean = false;
  cond: boolean;

  origin: string;
  destination: string;

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    
  }

  getFlights(): void
  {
    this.isClicked = true;
    this.flightsService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }

  searchByOrigingAndDestination(): void
  {
    this.flightsService.getFlightByOrgAndDest(this.origin, this.destination).subscribe(data => {
      console.log(typeof data);
      if(Object.keys(data).length === 0)
      {
        this.cond = true
        return;
      }
      this.flights = data
    })
  }

  handleChange(e: Event): void
  {
    this.isClicked = true;
  }

}
