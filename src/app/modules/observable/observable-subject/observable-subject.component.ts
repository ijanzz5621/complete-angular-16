import { Component } from '@angular/core';
import { ObservableSubjectNewTaskComponent } from './observable-subject-new-task/observable-subject-new-task.component';
import { ObservableSubjectShowTaskComponent } from './observable-subject-show-task/observable-subject-show-task.component';

@Component({
  selector: 'app-observable-subject',
  standalone: true,
  imports: [
    ObservableSubjectNewTaskComponent,
    ObservableSubjectShowTaskComponent,
  ],
  templateUrl: './observable-subject.component.html',
  styleUrl: './observable-subject.component.css'
})
export class ObservableSubjectComponent {

}
