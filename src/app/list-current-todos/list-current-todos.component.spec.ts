import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCurrentTodosComponent } from './list-current-todos.component';

describe('ListCurrentTodosComponent', () => {
  let component: ListCurrentTodosComponent;
  let fixture: ComponentFixture<ListCurrentTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCurrentTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCurrentTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
