import { Component, OnInit } from '@angular/core';
import {HellService} from '../hell.service';
import {Hell} from '../hell'

@Component({
  selector: 'app-hell',
  templateUrl: './hell.component.html',
  styleUrls: ['./hell.component.css']
})
export class HellComponent implements OnInit {
  private myService : HellService;
  public Hell : Hell[];

 constructor(param_service:HellService) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getHell().subscribe(
     (param_Hell:any[]) => {
       this.Hell = param_Hell;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
