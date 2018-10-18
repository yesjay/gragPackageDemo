import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { take, map, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-html5-drag-prac',
  templateUrl: './html5-drag-prac.component.html',
  styleUrls: ['./html5-drag-prac.component.css']
})
export class Html5DragPracComponent implements OnInit {
  click;
  interval
  example;
  example1;

  obs1;
  obs2;
  obs3;

  constructor() { }

  ngOnInit() {
    this.click = fromEvent(document.body, 'click');
    this.interval = interval(1000).pipe(take(3));

    // this.example = this.click.pipe(
    //   map(event => interval(1000).pipe(take(3))),
    //   concatAll()
    // ).subscribe({
    //   next: (value) => {console.log(value);},
    //   error: () => {console.log('error')},
    //   complete: () => {console.log('complete')}
    // });
    // this.interval.subscribe({
    //   next: (val) => {console.log(val)},
    //   error: (err) => {console.log(err)},
    //   complete: () => {console.log('complete')}
    // })
  }

  allowDrop(ev) {
    ev.preventDefault();
}

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
}
