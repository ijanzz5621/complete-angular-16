import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-observable-subject-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './observable-subject-new-task.component.html',
  styleUrl: './observable-subject-new-task.component.css'
})
export class ObservableSubjectNewTaskComponent {
  newTask: string = '';
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  OnCreateTask() {
    console.log(this.newTask);
    this.taskService.OnCreateTask(this.newTask);
  }

}
