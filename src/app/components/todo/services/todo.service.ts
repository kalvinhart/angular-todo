import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoWithId } from '../../../types/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'http://localhost:8083/api/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<TodoWithId[]> {
    return this.httpClient.get<TodoWithId[]>(this.url);
  }

  toggleComplete(todo: TodoWithId): Observable<TodoWithId> {
    todo.completed = !todo.completed;
    return this.updateTodo(todo);
  }

  saveTodo(todo: Todo): Observable<TodoWithId> {
    return this.httpClient.post<TodoWithId>(this.url, todo);
  }

  updateTodo(updatedTodo: TodoWithId): Observable<TodoWithId> {
    return this.httpClient.put<TodoWithId>(
      `${this.url}/${updatedTodo.id}`,
      updatedTodo
    );
  }

  deleteTodo(id: string): Observable<TodoWithId> {
    return this.httpClient.delete<TodoWithId>(`${this.url}/${id}`);
  }
}
