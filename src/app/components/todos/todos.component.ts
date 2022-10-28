import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { UiService } from 'src/app/services/ui.service';
import { Todo, TodoWithId } from 'src/app/types/Todo';

import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: TodoWithId[] = [];
  showAddForm: boolean = false;
  subscription!: Subscription;

  constructor(private todoService: TodoService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddForm = val));
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    return this.todoService
      .getTodos()
      .subscribe((todos) => (this.todos = todos));
  }

  handleSubmit(text: string): void {
    const newTodo: Todo = {
      text,
      completed: false,
    };

    this.todoService
      .saveTodo(newTodo)
      .subscribe((todo) => this.todos.push(todo));
  }

  updateTodo(todo: TodoWithId) {
    this.todoService
      .updateTodo(todo)
      .subscribe(
        (todo) =>
          (this.todos = this.todos.map((t) => (t.id === todo.id ? todo : t)))
      );
  }

  deleteTodo(id: string) {
    this.todoService
      .deleteTodo(id)
      .subscribe(
        (todo) => (this.todos = this.todos.filter((t) => t.id !== todo.id))
      );
  }

  toggleComplete(todo: TodoWithId) {
    this.todoService
      .toggleComplete(todo)
      .subscribe(
        (todo) =>
          (this.todos = this.todos.map((t) => (t.id === todo.id ? todo : t)))
      );
  }
}
