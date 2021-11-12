import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { FilmCreateComponent } from './films/film-create/film-create.component';
import { FilmPageComponent } from './films/film-page/film-page.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SallesComponent } from './salles/salles.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path : "", component: HomeComponent},
  { path: "film", component: FilmPageComponent },
  { path: "client", component: ClientPageComponent},
  { path: "reservation", component: ReservationsComponent},
  { path: "salle", component: SallesComponent}, 

  {
    path:"film", children: [
      { path: "new", component: FilmCreateComponent},
    ]
  },
  {
    path:"client", children: [
      { path : "newclient", component: ClientCreateComponent},
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
