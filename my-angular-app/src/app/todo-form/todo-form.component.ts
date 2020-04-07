import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  novaTarefa : string = '';
  valida : string = '';
  @Output() onNovaTarefa = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.novaTarefa.length > 0) {
      console.log(this.novaTarefa);
      this.onNovaTarefa.emit(this.novaTarefa);
      this.novaTarefa = '';
      this.valida = '';
    }
    else {
      this.valida = 'Campo está nulo';
    }
  }
}
