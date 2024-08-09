import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
  }

  // @Input() set display(value: Object) {
  //   let entries = Object.entries(value)
  //   for (let item of entries){      
  //     let[className, condition] = item;
  //     if (condition){ // true
  //       this.renderer.addClass(this.element.nativeElement, className)
  //     }
  //   }
  // }

  // @Input() set appClass(value: Object) { // set the variable same name with directive so taht we can bind property directly to directive
  //   let entries = Object.entries(value)
  //   for (let item of entries){      
  //     let[className, condition] = item;
  //     if (condition){ // true
  //       this.renderer.addClass(this.element.nativeElement, className)
  //     }
  //   }
  // }

  // Specify alias (same name with directive) to Input
  @Input('appClass') set display(value: Object) {
    let entries = Object.entries(value)
    for (let item of entries){      
      let[className, condition] = item;
      if (condition){ // true
        this.renderer.addClass(this.element.nativeElement, className)
      }
    }
  }


}
