import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html'
    //styleUrls: ['./cockpit.component.scss']
})
/** cockpit component*/
export class CockpitComponent {
 @Output() serverCreated = new EventEmitter<{ sName: string, sContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{ sName: string, sContent: string }>();;
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('newServerContent') newServerContent:ElementRef
    /** cockpit ctor */
    constructor() {

  }
  onAddServer(servernameinput:HTMLInputElement) {
    this.serverCreated.emit({
      sName: servernameinput.value,
      sContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(servernameinput: HTMLInputElement) {
    this.blueprintCreated.emit({
      sName: servernameinput.value,
      sContent: this.newServerContent.nativeElement.value
    });
  }
}
