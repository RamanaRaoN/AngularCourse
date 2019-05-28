import { Component, Input, EventEmitter, Output } from '@angular/core';
import { setInterval, clearInterval } from 'timers';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html'
    //styleUrls: ['./game.component.scss']
})
/** game component*/
export class GameComponent {
  @Output('intervelcall') startGame = new EventEmitter<number>();
  interval;
  intervalfired=0;
    /** game ctor */
    constructor() {

  }

  startGames() {
    this.interval = setInterval(() => {
      this.startGame.emit(this.intervalfired);
      this.intervalfired++;
    },1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
