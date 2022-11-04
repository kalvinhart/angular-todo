import { Injectable } from '@angular/core';
import { Todo } from '../../../types/Todo';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key: string): Todo[] {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
  }

  save(key: string, todos: Todo[]) {
    localStorage.setItem(key, JSON.stringify(todos));
  }
}
