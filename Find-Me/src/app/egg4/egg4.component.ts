import { Component, OnInit } from '@angular/core';
import {Egg4Service} from '../egg4.service';
import {Egg4} from '../egg4';

@Component({
  selector: 'app-egg4',
  templateUrl: './egg4.component.html',
  styleUrls: ['./egg4.component.css']
})
export class Egg4Component implements OnInit {
  private myService : Egg4Service;
  public Egg4 : Egg4[];

 constructor(param_service:Egg4Service) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getEgg4().subscribe(
     (param_Egg4:any[]) => {
       this.Egg4 = param_Egg4;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
