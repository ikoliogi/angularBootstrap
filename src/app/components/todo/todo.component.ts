import { Component, OnInit } from '@angular/core';
import {ITask} from '../../interfaces/ITask';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  public firstName: string = 'George';
  public lastName: string = 'Pago';
  public swalOptions = {
    icon: 'error',
    title: 'Are you sure?',
    showCancelButton: true
  };
  public todos: ITask[] = [
    {
      _id: '1',
      completed: false,
      title: 'Learn Angular',
      dueDate: new Date('2019-11-28T20:30:00.000Z')
    },
    {
      _id: '2',
      completed: false,
      title: 'Learn JavaScript',
      dueDate: new Date('2019-11-28T22:30:00.000Z')
    },
    {
      _id: '3',
      completed: false,
      title: 'Learn Firebase',
      dueDate: new Date('2019-11-28T19:26:00.000Z')
    },
    {
      _id: '4',
      completed: false,
      title: 'Learn MongoDB',
      dueDate: new Date('2019-11-28T13:11:00.000Z')
    }
  ];

  constructor() { }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(value) {
    console.log(value);
    const parts = value.split(' ' );
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  get pendingTasks() {
    return this.todos.filter(i => !i.completed);
  }

  get completedTasks() {
    return this.todos.filter(i => i.completed);
  }

  ngOnInit() {
    /*this.name = 'Dimos Karadimos';*/
  }

  public removeTask(id: string) {
    const pos = this.todos.findIndex(i => i._id === id);
    this.todos.splice(pos, 1);
  }

  public toggleTask(task: ITask) {
    task.completed = !task.completed;
  }

}
