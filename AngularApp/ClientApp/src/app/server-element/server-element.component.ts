import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html'
    //styleUrls: ['./server-element.component.scss']
})
/** serverElement component*/
export class ServerElementComponent {

  /* @Input is decorator. it can allow this javascript object to outside the component. Note:- here we can allow input values only.*/
  @Input('svrelement') element: { type: string, name: string, content:string};

    /** serverElement ctor */
    constructor() {

    }
}
