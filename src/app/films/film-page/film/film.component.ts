import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film!: Film;

  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
}
