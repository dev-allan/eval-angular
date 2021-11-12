import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { FilmCreateComponent } from './films/film-create/film-create.component';
import { FilmPageComponent } from './films/film-page/film-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: "film", component: FilmPageComponent },
  { path: "client", component: ClientPageComponent},
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
