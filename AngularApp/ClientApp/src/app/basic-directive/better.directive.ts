import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[bettertextHeighLight]'

})
export class betterdirective implements OnInit {

 
  constructor(private color: ElementRef, private element: Renderer2) {
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {

  //  // renderer pre-defined methods

  //  //this.element.setStyle(this.color.nativeElement, 'backgroundColor', 'blue');
  // // this.element.setStyle(this.color.nativeElement, 'color', '#fff');
  //  //this.element.removeStyle(this.color.nativeElement, 'color');
  // // this.color.nativeElement.style.backgroundColor = 'Green';

  }

  // HostListener example
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //console.log(eventData);

    //  Using renderer
    // this.element.setStyle(this.color.nativeElement, 'backgroundColor', 'green');

    // using hostbinding
     this.backgroundColor = 'green';
  }
  @HostListener('mouseleave') mouseexit(eventData1: Event) {
   // console.log(eventData1);

   //  Using renderer
  //  this.element.setStyle(this.color.nativeElement, 'backgroundColor', '#fff');

    // using hostbinding
     this.backgroundColor = 'transparent';
  }
}
