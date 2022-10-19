import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      id: 1,
      text: 'This is the first todo.',
      completed: false,
    },
    {
      id: 2,
      text: 'This is the second todo.',
      completed: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
