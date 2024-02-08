import { Component } from '@angular/core';
import { EmpArrayService } from 'src/app/services/emp-array.service';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.scss']
})
export class ServicesDemoComponent {
  employeeArray!:Array<any>;
constructor(private empService:EmpArrayService){
this.employeeArray=empService.empArray;
}

addEmp(){
  this.empService.addEmployee({id:6,name:"abc",role:'sd'})
}
}
