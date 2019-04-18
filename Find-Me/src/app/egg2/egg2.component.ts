import { Component, OnInit } from '@angular/core';
import {Egg2Service} from '../egg2.service';
import {Egg2} from '../egg2';

@Component({
  selector: 'app-egg2',
  templateUrl: './egg2.component.html',
  styleUrls: ['./egg2.component.css']
})
export class Egg2Component implements OnInit {
  private myService : Egg2Service;
  public Egg2 : Egg2[];

 constructor(param_service:Egg2Service) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getEgg2().subscribe(
     (param_Egg2:any[]) => {
       this.Egg2 = param_Egg2;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
