import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNameFormComponent } from './chat-name-form.component';

describe('ChatNameFormComponent', () => {
  let component: ChatNameFormComponent;
  let fixture: ComponentFixture<ChatNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatNameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
