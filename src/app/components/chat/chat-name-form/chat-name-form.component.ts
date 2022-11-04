import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-name-form',
  templateUrl: './chat-name-form.component.html',
  styleUrls: ['./chat-name-form.component.css'],
})
export class ChatNameFormComponent implements OnInit {
  @Output() submitName: EventEmitter<string> = new EventEmitter();
  chatName: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    if (this.chatName === '') return;

    this.submitName.emit(this.chatName);
    this.chatName = '';
  }
}
