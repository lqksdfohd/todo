import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreerTodoComponent } from './popup-creer-todo.component';

describe('PopupCreerTodoComponent', () => {
  let component: PopupCreerTodoComponent;
  let fixture: ComponentFixture<PopupCreerTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCreerTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCreerTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
