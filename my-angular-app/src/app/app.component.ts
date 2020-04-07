import { Component, OnInit } from '@angular/core';
import TodoItem from './TodoItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Five';
  todosGERAL : TodoItem[] = [];

  ngOnInit() {
    this.todosGERAL.push({
      titulo: "Aprendendo Typescript",
      isDone: true
    });

    this.todosGERAL.push({
      titulo: "Aprendendo Angular 5",
      isDone: false
    });
  }

  removerTarefa(index: number) {
    this.todosGERAL.splice(index, 1);
  }

  addNovaTarefa(newTodo : string) {
    this.todosGERAL.push({
      titulo: newTodo,
      isDone: false
    });
  }
  
}
