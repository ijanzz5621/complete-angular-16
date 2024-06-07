import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-component-lifecycle',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './component-lifecycle.component.html',
  styleUrl: './component-lifecycle.component.css'
})
export class ComponentLifeCycleComponent implements OnChanges, OnInit, DoCheck {

  title: string = 'Demo Component';
  @Input()
  message: string[] | undefined;

  @Input()
  message2: string | undefined;

  @ViewChild('temp')
  tempPara: ElementRef | undefined;

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
    //console.log('tempPara value: ' + this.tempPara?.nativeElement.innerHTML)
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
