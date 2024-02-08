import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-task',
  templateUrl: './directives-task.component.html',
  styleUrls: ['./directives-task.component.scss']
})
export class DirectivesTaskComponent {
data:Array<any>=[];
userName:string='';
userEmail:string='';
userAddress:string='';
index:number=1;
user:any={
  index:0,
  name:'',
  mail:'',
  address:''
};
constructor(){
  console.log(this.data)
  
}
AddData(){
  console.log("clicked");
  console.log(this.userName);
  
this.user={
  index:this.index,
  name:this.userName,
  mail:this.userEmail,
  address:this.userAddress
}
this.data.push(this.user);
this.index++;
}
RemoveUser(i:number){
this.data.splice(i,1);
}
}
