import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html'
   // styleUrls: ['./even.component.scss']
})
/** Even component*/
export class EvenComponent {

  @Input() number: number;
    /** Even ctor */
    constructor() {

  }
  

}
