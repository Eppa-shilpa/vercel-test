import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent {
  sharedData: any;
  private subscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.sharedData$.subscribe(data => {
      this.sharedData = data;
    });
}
}
