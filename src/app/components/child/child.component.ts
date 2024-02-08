import { Component, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() inputData!:string;
outputData :string="This is data from child using @viewChild Decorator";
outMessage:string="This is message from parent component using @Output Decorator";
@Output() messageEvent=new EventEmitter<string>();
sendDataToParent()
{
  this.messageEvent.emit(this.outMessage)
}
}
