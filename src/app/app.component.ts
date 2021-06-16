import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        title: 'Research Monkey News',
        completed: false,
      },

      {
        title: 'Fix the boiler',
        completed: false,
      },
      {
        title: 'Edit Songs of Phrase',
        completed: false,
      },
    ];
  }

  addTodo(todo: Todo): void {
    console.log('add todo');
    this.todos.push(todo);
    console.log(this.todos);
  }

  deleteTodo(targetedId: string): void {
    this.todos = this.todos.filter((todo) => todo.title !== targetedId);
  }
}
