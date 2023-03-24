import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  flights: Flight[] = [];

  isEditing: boolean = false;
  isDeleting: boolean = false;
  isCreating: boolean = false;

  /*
    form fields
  */

  origin: string;
  destination: string;
  flightNumber: number;
  departure: Date;
  arrival: Date;
  nonstop: boolean;

  constructor(private flightService: FlightsService) {}

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((data) => {
      this.flights = data
    })
  }

  handleDelete() : void
  {
    this.isDeleting = true;
  }

  handleEdit() : void
  {
    this.isEditing = true;
  }

  handleNew(): void
  {
    this.isCreating = true;
  }

}
