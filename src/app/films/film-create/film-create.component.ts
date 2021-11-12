import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.scss']
})
export class FilmCreateComponent implements OnInit {

  filmForm : FormGroup;

  constructor(private filmService: FilmService, private router : Router) {
    this.filmForm = new FormGroup({
      name : new FormControl("", Validators.required),
      realisateur : new FormControl("", Validators.required)
    })
   }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.filmService.createFilm(this.filmForm.value)
    .subscribe((_) => {
      this.router.navigate(['../film']);
    })
    console.log(this.filmForm.value);
  }

}
