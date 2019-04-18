import { Component } from '@angular/core';
import { EggService } from './egg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Find-Me';
  egg:string[];

  constructor(private myService: EggService){
    this.egg = [];
    this.myService.getEgg().subscribe(
      (param_egg:string[]) => {
        this.egg = param_egg;
        console.log(param_egg);
      }
    );

  }
}
