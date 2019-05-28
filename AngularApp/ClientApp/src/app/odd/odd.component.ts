import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html'
    //styleUrls: ['./odd.component.scss']
})
/** odd component*/
export class OddComponent {

  @Input('oddnumber') number: number;
    /** odd ctor */
    constructor() {

    }
}
