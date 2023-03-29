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

  id?: number
  origin: string;
  destination: string;
  flightNumber: number;
  departure: Date;
  arrival: Date;
  nonstop: boolean = false;

  constructor(private flightService: FlightsService) {}

  ngOnInit(): void {
    this.refresh();
  }

  handleDelete(f: Flight) : void
  {
    this.id = f.id
    this.origin = f.origin;
    this.destination = f.destination;
    this.flightNumber = f.flightNumber;
    this.departure = f.departure;
    this.arrival = f.arrival;
    this.nonstop = f.nonstop;
    this.isDeleting = true;
  }

  handleEdit(f: Flight) : void
  {
    console.log(f);
    this.id = f.id;
    this.origin = f.origin;
    this.destination = f.destination;
    this.flightNumber = f.flightNumber;
    this.departure = f.departure;
    this.arrival = f.arrival;
    this.nonstop = f.nonstop;
    this.isEditing = true;
  }

  handleNew(): void
  {
    this.isCreating = true;
  }

  refresh(): void
  {
    this.flightService.getFlights().subscribe((data) => {
      this.flights = data
      console.log(this.flights);
    })
  }

  createNewFlight()
  {
    const flight: Flight = {
      origin: this.origin, 
      destination: this.destination,
      flightNumber: this.flightNumber,
      departure: new Date(this.departure),
      arrival: new Date(this.arrival),
      nonstop: this.nonstop
    }
    this.flightService.newFlight(flight)
    console.log(flight);
    
  }

  toggleNonstop(): void
  {
    this.nonstop = !this.nonstop;
  }

  updateFlight()
  {
    const flight: Flight = {
      id: this.id,
      origin: this.origin, 
      destination: this.destination,
      flightNumber: this.flightNumber,
      departure: new Date(this.departure),
      arrival: new Date(this.arrival),
      nonstop: this.nonstop
    }
    this.flightService.updateFlight(flight).subscribe(data => {
      if(data && data['affected'])
      {
        this.refresh()
      }
      this.isEditing = false;
    })
  }

  deleteConfirmed()
  {
    const flight: Flight = {
      id: this.id,
      origin: this.origin, 
      destination: this.destination,
      flightNumber: this.flightNumber,
      departure: new Date(this.departure),
      arrival: new Date(this.arrival),
      nonstop: this.nonstop
    }
    this.flightService.deleteFlight(flight.id).subscribe(data => {
      if(data && data['affected'])
      {
        this.refresh();
      }
      this.isDeleting = false;
    })
  }

}
