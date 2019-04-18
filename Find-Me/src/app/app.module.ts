import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AccueilComponent } from './accueil/accueil.component';


import { RabbitComponent } from './rabbit/rabbit.component';
import { HellComponent } from './hell/hell.component';
import { DoctorComponent } from './doctor/doctor.component';
import { Egg1Component } from './egg1/egg1.component';
import { Egg2Component } from './egg2/egg2.component';
import { Egg3Component } from './egg3/egg3.component';
import { Egg4Component } from './egg4/egg4.component';
import { Egg5Component } from './egg5/egg5.component';
import { Egg6Component } from './egg6/egg6.component';


@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    
    AccueilComponent,
    RabbitComponent,
    HellComponent,
    DoctorComponent,
    Egg1Component,
    Egg2Component,
    Egg3Component,
    Egg4Component,
    Egg5Component,
    Egg6Component
  ],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
