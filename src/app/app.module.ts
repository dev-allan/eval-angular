import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { ClientsComponent } from './clients/clients.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationsComponent } from './reservations/reservations.component';
import { SallesComponent } from './salles/salles.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ClientsComponent,
    NavbarComponent,
    NotFoundComponent,
    NavbarComponent,
    NotFoundComponent,
    ReservationsComponent,
    SallesComponent,
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
