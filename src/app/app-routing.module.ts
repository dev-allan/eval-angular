import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { FilmPageComponent } from './films/film-page/film-page.component';

const routes: Routes = [
  { path: "film", component: FilmPageComponent },
  { path: "client", component: ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
