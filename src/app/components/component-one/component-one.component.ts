import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent {
  constructor(private sharedService: SharedService) { }

  updateSharedData() {
    this.sharedService.updateSharedData({ message: 'Hello from Component One' });
  }
}
