import { Component, OnInit } from '@angular/core';
import {Egg6Service} from '../egg6.service';
import {Egg6} from '../egg6';


@Component({
  selector: 'app-egg6',
  templateUrl: './egg6.component.html',
  styleUrls: ['./egg6.component.css']
})
export class Egg6Component implements OnInit {
  private myService : Egg6Service;
  public Egg6 : Egg6[];

 constructor(param_service:Egg6Service) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getEgg6().subscribe(
     (param_Egg6:any[]) => {
       this.Egg6 = param_Egg6;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
