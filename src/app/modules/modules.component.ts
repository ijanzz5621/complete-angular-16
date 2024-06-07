import { Component } from '@angular/core';

import { NgIf } from '@angular/common';

import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ComponentLifeCycleComponent } from './component-lifecycle/component-lifecycle.component';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateComponent,
    NgContainerComponent,
    ContentChildComponent,
    ComponentLifeCycleComponent
  ],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {

  inputVal: string[] = ['Hello', 'Hi there!'];
  inputVal2: string = '';

  toDestroy: boolean = false;

  constructor() {
    console.log("Initialize main module!");
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal.push(inputEl.value);
    this.inputVal2 = inputEl.value;
  }

  DestroyComponent() {
    this.toDestroy = !this.toDestroy;
  }

}
