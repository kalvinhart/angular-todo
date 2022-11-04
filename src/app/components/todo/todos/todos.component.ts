import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { TodoService } from 'src/app/services/todo.service';
import { UiService } from 'src/app/services/ui.service';
import { Todo, TodoWithId } from 'src/app/types/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: TodoWithId[] = [];
  showAddForm: boolean = false;
  isLoading: boolean = true;
  subscription!: Subscription;
  events!: Subscription;

  constructor(
    private todoService: TodoService,
    private uiService: UiService,
    private eventService: EventService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddForm = val));

    this.events = this.eventService
      .getServerSentEvent()
      .subscribe((newEvent) => {
        console.log('received from server: ', newEvent);
      });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.isLoading = true;

    return this.todoService.getTodos().subscribe((todos) => {
      this.isLoading = false;
      return (this.todos = todos);
    });
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
