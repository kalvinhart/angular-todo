import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() variant?: string = 'primary';
  @Input() text?: string;
  @Input() disabled: boolean = false;
  @Input() icon?: IconDefinition;
  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.handleClick.emit();
  }
}
