import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

/// Replay Subject
// ReplaySubject stores some of the old values and sends them to new subscribers.

/*
  Sample Output:

    Subscriber A: 100
    Subscriber A: 200
    Subscriber A: 300
    Subscriber B: 100
    Subscriber B: 200
    Subscriber B: 300
    Subscriber A: 2020
    Subscriber B: 2020
    Subscriber C: 100
    Subscriber C: 200
    Subscriber C: 300
    Subscriber C: 2020
*/

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    //const subject = new Subject();
    const subject = new ReplaySubject<number>(); // 2019 is the initial value

    subject.next(100);
    subject.next(200);
    subject.next(300);

    // Subscriber 1
    subject.subscribe((data) => {
      console.log('Subscriber A:', data);
    });

    // Subscriber 2
    subject.subscribe((data) => {
      console.log('Subscriber B:', data);
    });

    //subject.next(Math.random());
    subject.next(2020);

    // Subscriber 3
    subject.subscribe((data) => {
      console.log('Subscriber C:', data);
    });
  }

}
