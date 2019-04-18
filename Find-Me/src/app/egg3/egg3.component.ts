import { Component, OnInit } from '@angular/core';
import {Egg3Service} from '../egg3.service';
import {Egg3} from '../egg3';

@Component({
  selector: 'app-egg3',
  templateUrl: './egg3.component.html',
  styleUrls: ['./egg3.component.css']
})
export class Egg3Component implements OnInit {
  private myService : Egg3Service;
  public Egg3 : Egg3[];

 constructor(param_service:Egg3Service) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getEgg3().subscribe(
     (param_Egg3:any[]) => {
       this.Egg3 = param_Egg3;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
