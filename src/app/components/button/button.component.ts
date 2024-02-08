import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor(private modal:MatDialog){

  }
openModal(){
var modalres=this.modal.open(ModalComponent,{
  height:"300px",
  width:'250px'
});
modalres.afterClosed().subscribe(response=>
  {
    console.log(response);
    
  })

}
}
