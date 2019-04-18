import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HellService {

  constructor(private myService:HttpClient) { }

  public getHell():Observable<string[]>{
    return this.myService.get("http://easteregg.wildcodeschool.fr/api/characters").pipe(
      map(
        (param_hell:any)=> {
          let collection:any = param_hell.collection;
          let results:string[]=[]; 
          let current=null;

          results.push(param_hell[3].image)

          return results;
        }
      )
    )
  }
}
