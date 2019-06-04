import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  constructor() {
    console.log('c call');
  }

  title = 'app';
  serverElements = [{ type: 'server', name: 'first server', content: 'server content' }];
  onServerAdd(serverData: { sName: string, sContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.sName,
      content: serverData.sContent
    });
  }

  onBlueprintAdd(bluePrintData: { sName: string, sContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.sName,
      content: bluePrintData.sContent
    });
  }
 /**
  *  custom properties and event binding assignment
  * @param firenumber
  */
  oddNumber: number[] = [];
  evenNumber: number[] = [];

  startGame(firenumber: number) {
    if (firenumber % 2 === 0) {
      this.evenNumber.push(firenumber);

    }
    else {
      this.oddNumber.push(firenumber);
    }
    console.log(this.oddNumber);
    console.log(this.evenNumber);
  }

  /*
  Recipe book componet code
*/
  loadFeature = "recipe";
  onSelectTab(feature: string) {
    this.loadFeature = feature;
  }

  ngOnInit() {
    // throw new Error("Method not implemented.");
     console.log('');
  }


  /*inject service*/
  //accounts: { name: string, status: string }[] = [];
  //constructor(private accountservice:AccountService) {
  //}

  //ngOnInit() {
  //  this.accounts = this.accountservice.accounts;
  //}
}
