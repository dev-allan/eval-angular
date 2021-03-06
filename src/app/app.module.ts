import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmPageComponent } from './films/film-page/film-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { FilmComponent } from './films/film-page/film/film.component';
import { FilmCreateComponent } from './films/film-create/film-create.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { ClientComponent } from './clients/client-page/client/client.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservations/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmPageComponent,
    ClientPageComponent,
    NavbarComponent,
    NotFoundComponent,
    NavbarComponent,
    NotFoundComponent,
    ReservationsComponent,
    FilmPageComponent,
    FilmComponent,
    FilmCreateComponent,
    ClientCreateComponent,
    ClientPageComponent,
    ClientComponent,
    HomeComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
