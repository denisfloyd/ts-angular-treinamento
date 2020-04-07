import { Component } from '@angular/core';
import { SearchService } from './search.service';
import SearchItem from './search-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private loading: boolean = false; 
  private results: SearchItem[];

  constructor(private itunes : SearchService) {

  }

  pesquisarTermo(term:string) {
    this.loading = true;
    this.itunes.pesquisa(term).then( () => this.loading = false );
  }

  pesquisarTermoOb(term:string) {
    this.loading = true;
    this.itunes.pesquisaOb(term).subscribe(novosDados => {
      console.log(novosDados);
      this.loading = false;
      this.results = novosDados;
    })
  }
}
