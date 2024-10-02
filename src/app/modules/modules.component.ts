import { Component } from '@angular/core';

import { NgIf } from '@angular/common';

import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ComponentLifeCycleComponent } from './component-lifecycle/component-lifecycle.component';
import { CustomClassDirectiveComponent } from './custom-class-directive/custom-class-directive.component';
import { CustomStyleDirectiveComponent } from './custom-style-directive/custom-style-directive.component';
import { CustomStructureDirectiveComponent } from './custom-structure-directive/custom-structure-directive.component';
import { CustomNgSwitchComponent } from './custom-ng-switch/custom-ng-switch.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ServiceHierarchyInjectionComponent } from './service-hierarchy-injection/service-hierarchy-injection.component';
import { ObservableExample01Component } from './observable/observable-example01/observable-example01.component';
import { ObservableFromEventComponent } from './observable/observable-from-event/observable-from-event.component';
import { ObservableMapFilterComponent } from './observable/observable-map-filter/observable-map-filter.component';


@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateComponent,
    NgContainerComponent,
    ContentChildComponent,
    ComponentLifeCycleComponent,
    CustomClassDirectiveComponent,
    CustomStyleDirectiveComponent,
    CustomStructureDirectiveComponent,
    CustomNgSwitchComponent,
    ServiceExampleComponent,
    ServiceHierarchyInjectionComponent,
    ObservableExample01Component,
    ObservableFromEventComponent,
    ObservableMapFilterComponent,
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
