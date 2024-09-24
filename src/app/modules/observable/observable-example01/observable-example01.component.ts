import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

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
  ofdata: any[] = [];
  fromdata: any[] = [];

  array1: any[] = [1, 3, 5, 7, 9];
  array2: any[] = ['A', 'B', 'C', 'D', 'E'];


  async sleep(second: number) {
    await setTimeout(async () => {
      console.log("Sleep for " + second + "seconds");
    }, second * 1000)
  }

  // Observable
  myObservable = new Observable((observer) => {
    // observer.next([1, 2, 3, 4, 5]); // emit value

    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    // setTimeout(() => { observer.error(new Error('Something went wrong. Please try again later')) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
    setTimeout(() => { observer.complete() }, 6000);
   
  });

  // of example
  //myOfObservable = of(this.array1);

  // Observable using Promise
  myPromiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50])
  })

  // using of
  myOfObservable = of(this.array1, this.array2);

  // using from observable 
  // myFromObservable = from(['MY', 'NAME', 'IS', 'SHARIZAN']);

  // It will loop as CHAR
  //myFromObservable = from('MYNAMEISSHARIZAN');

  // From Observable using Promise
  myFromObservable = from(this.myPromiseData)

  GetAsyncDataClicked() {

    this.data = [];
    
    // Observer
    // next, error, complete
    
    // // old version
    // this.myObservable.subscribe((val: any) => {
    //   //this.data = val;
    //   this.data.push(val)
    // },
    // (err) => {
    //   alert(err.message);
    // },
    // () => {
    //   alert('Data has been retrieved successfully.')
    // });

    this.myObservable.subscribe({
      next: (val: any) => this.data.push(val),
      error: (err: Error) => alert(err.message),
      complete: () => alert('Data has been streamed successfully!')
    });

    // // new version
    // of(this.myObservable).subscribe({
    //   next: (val) => this.data.push(val),
    //   error: (err) => alert(err.message),
    //   complete: () => alert('Data has been streamed successfully!')
    // });

  }

  GetAsyncDataClickUsingOf() {

    this.ofdata = [];

    this.myOfObservable.subscribe({
      next: (val: any) => {
        for (var item in val) {
          this.ofdata.push(item)
        }
      },
      error: (err: Error) => alert(err.message),
      complete: () => alert('Data Of Observable has been streamed successfully!')
    });
  }

  GetAsyncDataClickUsingFrom() {

    this.fromdata = [];

    this.myFromObservable.subscribe({
      next: (val: any) => {
          this.fromdata.push(val)
      },
      error: (err: Error) => alert(err.message),
      complete: () => alert('Data From Observable has been streamed successfully!')
    });

  }

}
