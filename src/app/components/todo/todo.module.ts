import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    TodoFormComponent,
  ],
  imports: [SharedModule],
  exports: [TodosComponent],
})
export class TodoModule {}
