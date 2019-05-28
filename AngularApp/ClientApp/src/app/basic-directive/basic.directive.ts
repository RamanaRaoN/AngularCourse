import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[textHeighLight]'

})
export class basicdirective implements OnInit {

  constructor(private color: ElementRef) {

  }
  ngOnInit() {
    this.color.nativeElement.style.backgroundColor = 'Green';
  }
}
