import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../../services/todo-list/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: any[] = [];
  todo: any = {};
  todoTitle: string;
  todoDescription: string;
  isLoading = false;

  constructor(
    public _todoService: TodoListService
  ) { }

  ngOnInit() {
    let _out = this;
    _out.isLoading = true;
    let subscription = this._todoService.getTodo().subscribe(
      (response: any) => {
        _out.todoList = response;
        subscription.unsubscribe();
        _out.isLoading = false;
      },
      (error) => {
        console.log(error);
        alert("Something went wrong when fetching data");
        subscription.unsubscribe();
        _out.isLoading = false;
      }
    );
  }

  addTodoNote() {
    this.toggleLoading(this.isLoading);
    setTimeout(() => {
      this.toggleLoading(this.isLoading);
      this.isAFieldEmpty() ? alert("Empty field detected") : this.AddTodoList();
    }, 1 * 1000);
  }

  toggleLoading(isLoading) {
    this.isLoading = !isLoading;
  }

  isAFieldEmpty() {
    if (this.todoTitle == "" || this.todoTitle == null || this.todoDescription == "" || this.todoDescription == null) {
      return true;
    }
    else {
      return false;
    }
  }

  AddTodoList() {
    this.todo.title = this.todoTitle;
    this.todo.description = this.todoDescription;
    this.todoList.push(this.todo);
    this.todoTitle = "";
    this.todoDescription = "";
    this.todo = {};
  }

  deleteTodoNote(todoNoteIndex) {
    this.todoList.splice(todoNoteIndex, 1);
  }

}