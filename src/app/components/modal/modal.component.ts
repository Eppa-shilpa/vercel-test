import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  message:object={
    id:'1',
    name:"abc"
  };
  constructor(private matDialogRef:MatDialogRef<ModalComponent>){

  }
  closeModal(){
   this.matDialogRef.close(this.message);
  }
}
