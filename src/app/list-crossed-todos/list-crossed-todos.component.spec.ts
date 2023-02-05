import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCrossedTodosComponent } from './list-crossed-todos.component';

describe('ListCrossedTodosComponent', () => {
  let component: ListCrossedTodosComponent;
  let fixture: ComponentFixture<ListCrossedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCrossedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCrossedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
