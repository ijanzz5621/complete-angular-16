import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './component-lifecycle.component.html',
  styleUrl: './component-lifecycle.component.css'
})
export class ComponentLifeCycleComponent implements OnChanges, OnInit, DoCheck {

  title: string = 'Demo Component';
  @Input()
  message: string | undefined;

  constructor() {
    console.log('Initialized Component Init!');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges hook triggered!');
    console.log(this.message);
    console.log(changes);
  }

  ngOnInit() {
    console.log('OnInit hook triggered!');
  }

  ngDoCheck() {
    console.log('OnDoCheck hook triggered!');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit hook triggered!');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked hook triggered!');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit hook triggered!');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked hook triggered!');
  }

  ngOnDestroy() {
    console.log('OnDestroy hook triggered!');
  }

}
