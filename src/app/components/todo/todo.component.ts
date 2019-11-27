import { Component, OnInit } from '@angular/core';
import {ITask} from '../../interfaces/ITask';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  public search: string = '';
  public newTask: string;
  public newDueDate = new Date();
  public buttonText: string = 'Add Task';
  public taskExists = false;

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

  public lowerCased = this.todos.map(i => {
    return i.title.toLowerCase();
  });

  constructor() { }

  // GETTER SETTER EXAMPLE
  /*public firstName: string = 'George';
  public lastName: string = 'Pago';
  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(value) {
    console.log(value);
    const parts = value.split(' ' );
    this.firstName = parts[0];
    this.lastName = parts[1];
  }*/

  get pendingTasks() {
    return this.todos.filter(i => !i.completed);
  }

  get completedTasks() {
    return this.todos.filter(i => i.completed);
  }

  ngOnInit() {
  }

  public removeTask(id: string) {
    const pos = this.todos.findIndex(i => i._id === id);
    this.todos.splice(pos, 1);
    this.lowerCased.splice(pos, 1);
  }

  public toggleTask(task: ITask) {
    task.completed = !task.completed;
  }

  public addToList() {
    const newTask: ITask = {
      // _id: this.todos.length + 1 + '',
      _id: (this.todos.length + 1).toString(),
      title: this.newTask,
      dueDate: this.newDueDate,
      completed: false
    };
    this.todos.push(newTask);
    this.newTask = '';
    this.lowerCased = this.todos.map( i => {
      return i.title.toLowerCase();
    });
  }

  public checkDuplicate() {
    const newTaskLowerCased = this.newTask.toLowerCase();
    if (this.lowerCased.includes(newTaskLowerCased)) {
      this.taskExists = true;
      this.buttonText = 'Task exists!';
    } else {
      this.taskExists = false;
      this.buttonText = 'Add Task';
    }
  }

}
