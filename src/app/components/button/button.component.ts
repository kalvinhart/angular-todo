import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() text!: string;
  @Input() handleClick?: () => void;

  constructor() {}

  ngOnInit(): void {}
}
