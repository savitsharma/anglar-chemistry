import { Component,Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


@Component({
  selector: 'app-messagepopup',
  templateUrl: './messagepopup.component.html',
  styleUrls: ['./messagepopup.component.scss']
})
export class MessagepopupComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string,
  ) { }
}
