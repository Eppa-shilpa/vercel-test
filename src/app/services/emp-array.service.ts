import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpArrayService {
empArray:Array<any>=[
  {id:1,name:"abc",role:'fsd'},
  {id:2,name:"xyz",role:'associate enginner'},
  {id:3,name:"vfr",role:'junior sw devloper'},
  {id:4,name:"ajhjbc",role:'senior sw devloper'},
  {id:5,name:"uys",role:'software devloper'}
]
addEmployee(data:any){
this.empArray.push(data);
}
}
