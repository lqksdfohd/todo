import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneTodoComponent } from './une-todo.component';

describe('UneTodoComponent', () => {
  let component: UneTodoComponent;
  let fixture: ComponentFixture<UneTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UneTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
