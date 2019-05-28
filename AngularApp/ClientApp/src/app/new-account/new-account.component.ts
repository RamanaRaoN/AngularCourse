import { Component, EventEmitter, Output } from '@angular/core';
import { LogService } from '../Log.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LogService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logservice: LogService, private accountservice: AccountService) {
    this.accountservice.accountstatus.subscribe(
      (msg: string) => alert('new status ' + msg)
        //(msg: string, msg1: string) => alert('new status ' + msg + 'new status ' + msg1)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    //this.accountAdded.emit({
    //  name: accountName,
    //  status: accountStatus
    //});
    //console.log('A server status changed, new status: ' + accountStatus);
    this.accountservice.onAccountAdded(accountName, accountStatus);
    //this.logservice.LogStatus(accountStatus);
  }
}
