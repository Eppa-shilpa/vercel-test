import { Component } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-deriven-form',
  templateUrl: './template-deriven-form.component.html',
  styleUrls: ['./template-deriven-form.component.scss']
})
export class TemplateDerivenFormComponent {
  onSubmit(f: NgForm) {
    console.log(f.value)
  }
  handleNameChange(fullname: NgControl) {
    console.log(fullname.errors);
  }
  handleEmailChange(email: NgControl) {
    console.log(email.value);
    console.log(email);
    
  }
  handleAddressChange(address: NgControl) {
    console.log(address.value);
  }
}
