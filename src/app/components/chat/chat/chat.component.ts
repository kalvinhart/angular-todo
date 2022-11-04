import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  private username: string = '';
  private userId!: string;

  constructor() {}

  ngOnInit(): void {}

  handleNameSubmit(name: string) {
    console.log(name);
    this.username = name;
  }
}
