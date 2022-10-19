import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { v4 as uuid } from 'uuid';

import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    const textValue = form.controls['todoText'].value;
    if (textValue === '') return;

    const todo: Todo = {
      id: uuid(),
      text: textValue,
      completed: false,
    };

    this.todoService.saveTodo(todo);
  }
}
