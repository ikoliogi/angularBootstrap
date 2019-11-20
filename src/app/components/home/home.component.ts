import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public task: string = '';

  public list: string[] = [
    'Learn HTML',
    'Learn CSS',
    'Learn JavaScript',
    'Learn Typescript',
    'Learn Angular Framework',
    'Learn Bootstrap Framework',
    'Learn ExpressJS Framework',
    'Learn MongoDB'
  ];

  constructor() { }

  ngOnInit() {
  }

  public addToList() {
    // this. -> gia tis metavlhtes tou class sto opoio vriskomaste
    if (this.task && !this.list.includes(this.task)) {
      this.list.push(this.task);
      this.task = '';
    }
  }

  public removeFromList(i) {
    this.list.splice(i, 1);
  }

  public deleteAll() {
    this.list = [];
  }

}
