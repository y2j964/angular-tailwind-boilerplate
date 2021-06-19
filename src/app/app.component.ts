import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  trackByTodoId(index: number, todo: Todo) {
    return todo.id;
  }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe((todos: Todo[]) => (this.todos = todos));
  }

  addTodo(todo: Todo) {
    this.todoService
      .addTodo(todo)
      .subscribe((res: Todo) => this.todos.push(res));
  }

  deleteTodo(targetedId: string) {
    this.todoService
      .deleteTodo(targetedId)
      .subscribe(
        () => (this.todos = this.todos.filter(({ id }) => id !== targetedId))
      );
  }
}
