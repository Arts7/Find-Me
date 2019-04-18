import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Egg6Service {

  constructor(private myService:HttpClient) { }
  public getEgg6():Observable<string[]>{
    return this.myService.get("./assets/Egg.json").pipe(
      map(
        (param_egg6:any)=> {
          let collection:any = param_egg6.collection;
          let usual:any[] = collection.usual;
          let results:string[]=[]; 
          let current=null;

          for (let i:number=0; i<usual.length; i++){
            current=usual[i];

                results.push(current.links[8].image);
            }
          console.log(results)
          return results;
        }
      )
    )
  }
}
