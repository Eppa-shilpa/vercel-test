import { Component } from '@angular/core';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDemo';
  number = 30;
  filterType="";
  filterValue="";
  constructor(private customPipe:CustomPipePipe){
    
  }
  users = [
    {
      id: 1,
      name: "abc",
      department:"IT",
      office:"India"
    },
    {
      id: 2,
      name: "def",
      department:"IT",
      office:"Seattle"
    },
    
    {
      id: 3,
      name: "ada",
      department:"HR",
      office:"India"
    }
  ]
  depClick(){
    this.filterType="department"
    this.filterValue="IT";
    let res=this.customPipe.transform(this.users,this.filterType,this.filterValue)
    console.log(res);
    
  }
  officeClick(){
    this.filterType="office"
    this.filterValue="India"
    let res=this.customPipe.transform(this.users,this.filterType,this.filterValue)
    console.log(res);
  }
  
}
