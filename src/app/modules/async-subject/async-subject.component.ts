import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

/// Async Subject
// Async Subject emits the last value only when the complete method is called.

/*

  Sample Output:

    Subscriber A: 400
    Subscriber B: 400
    Subscriber C: 400

*/

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent implements OnInit {

  subject = new AsyncSubject<number>(); // 2019 is the initial value

  constructor() {
  }

  ngOnInit() {
    this.subject.next(100);
    this.subject.next(200);
    this.subject.next(300);

    // Subscriber 1
    this.subject.subscribe((data) => {
      console.log('Subscriber A:', data);
    });

    // Subscriber 2
    this.subject.subscribe((data) => {
      console.log('Subscriber B:', data);
    });

    this.subject.next(400);

    // Subscriber 3
    this.subject.subscribe((data) => {
      console.log('Subscriber C:', data);
    });

    this.subject.complete();

    this.subject.next(500);

    // Subscriber 4
    this.subject.subscribe((data) => {
      console.log('Subscriber D:', data);
    });   
  }

}
