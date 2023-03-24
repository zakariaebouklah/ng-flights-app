export interface Flight {
    id?: number;
    origin: string;
    destination: string;
    flightNumber: number;
    departure: Date;
    arrival: Date;
    nonstop: boolean;
}