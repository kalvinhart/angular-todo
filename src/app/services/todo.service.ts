import { Injectable } from '@angular/core';
import { Todo } from '../types/Todo';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private storageService: StorageService) {}

  getTodos() {
    return this.storageService.get('todos');
  }

  toggleComplete(id: string): Todo[] {
    const todos = this.getTodos();

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.storageService.save('todos', newTodos);

    return newTodos;
  }

  saveTodo(todo: Todo) {
    const todos = this.getTodos();
    todos.push(todo);
    this.storageService.save('todos', todos);
  }

  updateTodo(updatedTodo: Todo): Todo[] {
    const todos = this.getTodos();

    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );

    this.storageService.save('todos', newTodos);

    return newTodos;
  }

  deleteTodo(id: string): Todo[] {
    const todos = this.getTodos();

    const newTodos = todos.filter((todo) => todo.id !== id);

    this.storageService.save('todos', newTodos);

    return newTodos;
  }
}
