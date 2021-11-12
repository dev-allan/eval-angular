import { Component, OnInit } from '@angular/core';
import { Reservation } from '../shared/models/reservation';
import { ReservationService } from '../shared/services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations : Reservation[] = [];

  constructor(private reservationService : ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations()
    .subscribe((reservations:Reservation[])=> this.reservations = reservations)
  }

}
