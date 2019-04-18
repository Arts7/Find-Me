import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EggService} from '../egg.service';
import {Egg} from '../egg'

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.css']
})
export class RabbitComponent implements OnInit {
   private myService : EggService;
   public Egg : Egg[];

  constructor(param_service:EggService) { 
    this.myService=param_service;
  }

  ngOnInit() {
    this.myService.getEgg().subscribe(
      (param_Egg:any[]) => {
        this.Egg = param_Egg;
      },
      () => "impossible de jouer aujourd'hui"
    ) 
  }

}
