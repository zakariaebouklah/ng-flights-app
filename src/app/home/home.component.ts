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

  searchByOrgingAndDestination()
  {
    this.flightsService.getFlightByOrgAndDest(this.origin, this.destination).subscribe(data => {
      console.log(data);
      
      this.flights = data
    })
  }

}
