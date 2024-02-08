import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
upperCaseExample:string="Transforming to upper case";
lowerCaseExample:string="Transforming to lower case";
data:Date=new Date();
value:number=2345336;
dcValue:number=9.876543;
obj={id:1,name:"adad"}
myArray:Array<number>=[1,2,3,4,5,6]
per:number=0.97;
}
