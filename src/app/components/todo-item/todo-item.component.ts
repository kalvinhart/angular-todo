import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { TodoWithId } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: TodoWithId;
  @Output() handleDelete: EventEmitter<string> = new EventEmitter();
  @Output() handleEdit: EventEmitter<TodoWithId> = new EventEmitter();
  @Output() handleToggleComplete: EventEmitter<TodoWithId> = new EventEmitter();
  editing: boolean = false;
  editText: string = '';
  faEdit = faEdit;
  faSave = faSave;
  faTrash = faTrash;
  faTimes = faTimes;

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

  toggleComplete(todo: TodoWithId) {
    this.handleToggleComplete.emit(todo);
  }
}
