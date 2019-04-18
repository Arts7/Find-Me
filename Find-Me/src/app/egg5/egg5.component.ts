import { Component, OnInit } from '@angular/core';
import {Egg5Service} from '../egg5.service';
import {Egg5} from '../egg5';

@Component({
  selector: 'app-egg5',
  templateUrl: './egg5.component.html',
  styleUrls: ['./egg5.component.css']
})
export class Egg5Component implements OnInit {
  private myService : Egg5Service;
  public Egg5 : Egg5[];

 constructor(param_service:Egg5Service) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getEgg5().subscribe(
     (param_Egg5:any[]) => {
       this.Egg5 = param_Egg5;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
