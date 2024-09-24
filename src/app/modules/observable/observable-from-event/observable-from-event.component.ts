import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-from-event',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './observable-from-event.component.html',
  styleUrl: './observable-from-event.component.css'
})
export class ObservableFromEventComponent implements AfterViewInit {
  title="Observable FromEvent";

  @ViewChild('createBtn')
  createBtn: ElementRef | undefined;

  createBtnObservable: any;

  subscribeButton() {

    let count = 0;
    this.createBtnObservable = fromEvent(this.createBtn?.nativeElement, 'click')
      .subscribe((data) => {
        // console.log(data);
        this.showItem(++count);
      });
  }

  ngAfterViewInit(): void {
      this.subscribeButton();
  }

  showItem(num: number) {
    let div = document.createElement('div');
    div.innerText = 'Item ' + num;
    div.className = 'data-list';
    document.getElementById('container')?.append(div);
  }

}
