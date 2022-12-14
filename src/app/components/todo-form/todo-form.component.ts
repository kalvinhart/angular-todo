import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo: EventEmitter<string> = new EventEmitter();
  todoText: string = '';

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    if (!this.todoText) return;

    this.addTodo.emit(this.todoText);

    this.todoText = '';
  }
}
