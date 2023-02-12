import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTodoComponent } from './creer-todo.component';

describe('CreerTodoComponent', () => {
  let component: CreerTodoComponent;
  let fixture: ComponentFixture<CreerTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
