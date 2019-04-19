import { Routes } from '@angular/router';
import { Egg1Component } from './egg1/egg1.component';
import { Egg2Component } from './egg2/egg2.component';
import { Egg3Component } from './egg3/egg3.component';
import { Egg4Component } from './egg4/egg4.component';
import { Egg5Component } from './egg5/egg5.component';
import { Egg6Component } from './egg6/egg6.component';
import { HellComponent } from './hell/hell.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AccueilComponent } from './accueil/accueil.component';



const ROUTES: Routes = [
    { path: 'egg1', component: Egg1Component },
    { path: 'egg2', component: Egg2Component },
    { path: 'egg3', component: Egg3Component },
    { path: 'egg4', component: Egg4Component },
    { path: 'egg5', component: Egg5Component },
    { path: 'egg6', component: Egg6Component },
    { path: 'hell', component: HellComponent },
    { path: 'rabbit', component: RabbitComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'Accueil', component: AccueilComponent }
];

export  { ROUTES };