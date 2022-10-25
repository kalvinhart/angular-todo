import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { UiService } from 'src/app/services/ui.service';
import { Todo } from 'src/app/types/Todo';

import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  showAddForm: boolean = false;
  subscription!: Subscription;

  constructor(private todoService: TodoService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddForm = val));
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  handleSubmit(text: string): void {
    console.log('text: ', text);

    const todo: Todo = {
      id: uuid(),
      text,
      completed: false,
    };

    this.todoService.saveTodo(todo);
    this.todos.push(todo);
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
    this.todos = this.todos.map((t) => (t.id === todo.id ? todo : t));
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  toggleComplete(id: string) {
    this.todos = this.todoService.toggleComplete(id);
  }
}
