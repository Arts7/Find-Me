import { Component, OnInit } from '@angular/core';
import {Egg1Service} from '../egg1.service';
import {Egg1} from '../egg1';

@Component({
  selector: 'app-egg1',
  templateUrl: './egg1.component.html',
  styleUrls: ['./egg1.component.css']
})
export class Egg1Component implements OnInit {
  private myService : Egg1Service;
  public Egg1 : Egg1[];

 constructor(param_service:Egg1Service) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getEgg1().subscribe(
     (param_Egg1:any[]) => {
       this.Egg1 = param_Egg1;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
