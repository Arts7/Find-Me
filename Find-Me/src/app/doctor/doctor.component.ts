import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';
import {Doctor} from '../doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  private myService : DoctorService;
  public Doctor : Doctor[];

 constructor(param_service:DoctorService) { 
   this.myService=param_service;
 }

 ngOnInit() {
   this.myService.getDoctor().subscribe(
     (param_Doctor:any[]) => {
       this.Doctor = param_Doctor;
     },
     () => "impossible de jouer aujourd'hui"
   ) 
 }

}
