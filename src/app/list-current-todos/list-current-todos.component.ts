import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-current-todos',
  templateUrl: './list-current-todos.component.html',
  styleUrls: ['./list-current-todos.component.css']
})
export class ListCurrentTodosComponent implements OnInit {

  @Input()
  listeTodo
  constructor() { }

  ngOnInit(): void {
  }

}
