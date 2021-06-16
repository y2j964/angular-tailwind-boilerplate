import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<Todo>();

  model = {
    todoTitle: '',
  };

  constructor() {}

  handleSubmit() {
    if (!this.model.todoTitle) return;

    const newTodo: Todo = {
      title: this.model.todoTitle,
      completed: false,
    };
    this.addTodo.emit(newTodo);
    this.model.todoTitle = '';
  }
}
