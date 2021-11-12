import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { path: "film", component: FilmsComponent },
  { path: "client", component: ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
