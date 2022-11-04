import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatNameFormComponent } from './chat-name-form/chat-name-form.component';

@NgModule({
  declarations: [ChatComponent, ChatHeaderComponent, ChatNameFormComponent],
  imports: [SharedModule],
  exports: [ChatComponent],
})
export class ChatModule {}
