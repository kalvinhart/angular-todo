import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/types/Todo';

import { NgForm } from '@angular/forms';

import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

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
}
