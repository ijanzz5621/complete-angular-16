import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

// Different between Subject and BehaviorSubject
// BehaviorSubject needs an initial value when you subscribe to it.
// BehaviorSubject stores the latest value and emits it to new subscribers.
// BehaviorSubject is a type of subject, a subject is a type of observable.
// Subject: No initial Value

/*
  Sample Output:
    Subscriber A: 2019
    Subscriber B: 2019
    Subscriber A: 2020
    Subscriber B: 2020
    Subscriber C: 2020
*/

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

    //const subject = new Subject();
    const subject = new BehaviorSubject<number>(2019); // 2019 is the initial value

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
