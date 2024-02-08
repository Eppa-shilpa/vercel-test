import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-demo',
  templateUrl: './databinding-demo.component.html',
  styleUrls: ['./databinding-demo.component.scss']
})
export class DatabindingDemoComponent {
title!:string;
details!:string;
imageUrl!:string;
url!:string;
isChecked:boolean=false;
}
