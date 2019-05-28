import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogService } from '../Log.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers:[LogService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private logservice: LogService, private accountservice:AccountService) { }

  //onSetTo(status: string) {
  //  //this.statusChanged.emit({id: this.id, newStatus: status});
  //  //console.log('A server status changed, new status: ' + status);
  //  this.logservice.LogStatus(status);
  //}

   onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
     this.accountservice.onStatusChanged(this.id, status);
     this.accountservice.accountstatus.emit(status);
    // this.logservice.LogStatus(status);
  }
 
}
