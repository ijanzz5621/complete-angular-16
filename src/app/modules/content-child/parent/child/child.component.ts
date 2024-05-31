import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ContentChild('para')
  paragraphEl: ElementRef | undefined;

  // testing content children
  @ContentChildren('para')
  paragraphEls: QueryList<ElementRef> | undefined;

  @ContentChild(TestComponent)
  testEl: TestComponent | undefined;

  @ContentChildren(TestComponent)
  testEls: QueryList<TestComponent> | undefined;

  StyleParagraph() {
    //console.log(this.paragraphEl?.nativeElement);
    //console.log(this.paragraphEls?._results)
    
    this.paragraphEls?.forEach(item => {
      console.log(item.nativeElement)
    });
    
    //console.log(this.testEl!.name);
  
    this.testEls?.forEach(item => {
      console.log(item.name)
    })
  
  }

}
