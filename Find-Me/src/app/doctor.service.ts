import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private myService:HttpClient) { }

  public getDoctor():Observable<string[]>{
    return this.myService.get("http://easteregg.wildcodeschool.fr/api/characters").pipe(
      map(
        (param_doctor:any)=> {
          let collection:any = param_doctor.collection;
          let results:string[]=[]; 
          let current=null;

          results.push(param_doctor[0].image)

          return results;
        }
      )
    )
  }
}
