import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input()
  set style(styles: object) {
    console.log(styles);
    let entries = Object.entries(styles);
    for(let item of entries) {
      let[styleName, val] = item;
      // console.log('styleName: ', styleName, ', value: ', val);
      this.renderer.setStyle(this.element.nativeElement, styleName, val);
    }
  }


}
