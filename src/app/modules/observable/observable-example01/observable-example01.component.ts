import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example01',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './observable-example01.component.html',
  styleUrl: './observable-example01.component.css'
})
export class ObservableExample01Component {
  title = "ANGULAR OBSERVABLE EXAMPLES";

  data: any[] = [];

  async sleep(second: number) {
    await setTimeout(async () => {
      console.log("Sleep for " + second + "seconds");
    }, second * 1000)
  }

  //1. Create Observable

  // Observable
  myObservable = new Observable((observer) => {
    // observer.next([1, 2, 3, 4, 5]); // emit value

    // // stream data
    // observer.next(1);
    // this.sleep(1);
    // observer.next(2);
    // this.sleep(2);
    // observer.next(3);
    // this.sleep(3)
    // observer.next(4);
    // this.sleep(4);
    // observer.next(5);

    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
   
  });

  GetAsyncDataClicked() {

    this.data = [];
    // Observer
    // next, error, complete
    this.myObservable.subscribe((val: any) => {
      //this.data = val;
      this.data.push(val)
    })
  }

}
