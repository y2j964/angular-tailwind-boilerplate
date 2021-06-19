import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<string>();

  constructor() {}

  handleDeleteTodo() {
    this.deleteTodo.emit(this.todo.id);
  }
}
