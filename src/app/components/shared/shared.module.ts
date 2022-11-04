import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './button/button.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [ButtonComponent, SpinnerComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    ButtonComponent,
    SpinnerComponent,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
