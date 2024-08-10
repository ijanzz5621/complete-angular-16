import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
  standalone: true
})
export class IfDirective {

  // 1. Get access to html dom element where we want to add/remove
  // 2. Place from where we want to add/remove the dom element

  constructor(private view: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.view);
    } else {
      this.viewContainer.clear();
    }
  }
  
}
