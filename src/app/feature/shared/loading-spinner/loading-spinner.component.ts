import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template:
    '<div *ngIf="visible" class="lds-ring"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  @Input() visible = true; 
}
