import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent {

postArray:Array<string>=['post1','post2','post3','post4'];
objArray:Array<any>=[
  {id:1,name:"aaaaa"},{id:2,name:"bbbbb"},{id:3,name:"ccccc"}
]
exampleArray:Array<string>=[];
onButtonClick(){
this.exampleArray.push("data");
}

}
