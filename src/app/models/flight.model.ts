export interface Flight {
    origin: string;
    destination: string;
    flightNumber: number;
    departure: Date;
    arrival: Date;
    nonstop: boolean;
}