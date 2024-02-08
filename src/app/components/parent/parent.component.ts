import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit{
parentmessage:string="This is message from parent component using @Input Decorator";
childMessage!:string;
inMessage!:string;
userName!:string;

@ViewChild(ChildComponent) childComp:any;

getDataFromChild(data:string)
{
this.inMessage=data;
}

 handleName(){
console.log(this.userName)
 }

ngAfterViewInit():void{
console.log(this.childComp.outputData)
this.childMessage=this.childComp.outputData;
}


}
