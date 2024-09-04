import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { Top50Component } from './top50/top50.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    { path: 'perfil/:id', component: PerfilComponent },
    { path: '', component: InicioComponent },
    { path: 'top50', component: Top50Component },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'ingreso', component: IngresoComponent },
    { path: 'registro', component: RegistroComponent }
];
