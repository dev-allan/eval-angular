import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { ReservationService } from 'src/app/shared/services/reservation.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film!: Film;

  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private reservationService : ReservationService) { }

  ngOnInit(): void {
  }

  reserverSeance(): void {
    this.reservationService.createReservation(this.film)
    .subscribe((_) => {
      this.deleteEmitter.emit();
    })
  }
}
