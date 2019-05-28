import { LogService } from "./Log.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private logservice: LogService) {}

  accountstatus = new EventEmitter<string>();
  onAccountAdded(sName: string, status: string) {
    //console.log(sName, status);
    this.accounts.push({ name: sName, status: status });
    this.logservice.LogStatus(status);

  }

  onStatusChanged( id: number, newStatus: string ) {
    this.accounts[id].status = newStatus;
    this.logservice.LogStatus(newStatus);
  }
}
