import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesTodoComponent } from './toutes-todo.component';

describe('ToutesTodoComponent', () => {
  let component: ToutesTodoComponent;
  let fixture: ComponentFixture<ToutesTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutesTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToutesTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
