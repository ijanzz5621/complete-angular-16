import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-observable-subject-show-task',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './observable-subject-show-task.component.html',
  styleUrl: './observable-subject-show-task.component.css'
})
export class ObservableSubjectShowTaskComponent implements OnInit {
  tasks: string[] = ['task 1', 'task 2', 'task 3'];
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() {
    this.taskService.CreateTask.subscribe((val) => {
      this.tasks.push(val);
    });
  }

}
