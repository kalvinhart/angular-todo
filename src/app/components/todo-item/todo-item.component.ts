import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() handleDelete: EventEmitter<string> = new EventEmitter();
  @Output() handleEdit: EventEmitter<Todo> = new EventEmitter();
  editing: boolean = false;
  editText: string = '';

  constructor() {}

  ngOnInit(): void {
    this.editText = this.todo.text;
  }

  deleteTodo(id: string) {
    this.handleDelete.emit(id);
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  submitEdit(): void {
    if (this.editText === '') return;

    const newTodo = {
      ...this.todo,
      text: this.editText,
    };

    this.handleEdit.emit(newTodo);

    this.editing = false;
    this.editText = '';
  }
}
