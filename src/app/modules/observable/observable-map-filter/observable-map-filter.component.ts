import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-map-filter',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './observable-map-filter.component.html',
  styleUrl: './observable-map-filter.component.css'
})
export class ObservableMapFilterComponent implements AfterViewInit {
  data: any[] = [];

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  });

  // //myObservable = from(this.promiseData);
  // // emit 1 by 1 (stream)
  // // Need to multiply with 5
  // myObservable = from([2, 4, 6, 8, 10, 12]);

  // // Result: 10, 20, 30, 40, 50, 60
  // // Map => Transform data
  // transformObs = this.myObservable.pipe(map((val) => {
  //   return val * 5;
  // }));

  // // must return a boolean (===)
  // filteredObs = this.transformObs.pipe(filter((val) => {
  //   return val % 4 === 0;
  // }));

  // // short way 
  // myObservable = from([2, 4, 6, 8, 10, 12])
  //   .pipe(map((val) => {
  //     return val * 5;
  //   }))
  //   .pipe(filter((val) => {
  //     return val % 4 === 0;
  //   }));

  // Another short way
  // short way 
  myObservable = from([2, 4, 6, 8, 10, 12])
    .pipe(
        map((val) => {
          return val * 5;
        }), 
        filter((val) => {
          return val % 4 === 0;
        })
    );

  GetAsyncData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
      },
      error(err) {
        alert(err.message);  
      },
      complete() {
        alert('All the data is streamed!')
      }
    })
  };
  
  ngAfterViewInit() {
      
  }

}
