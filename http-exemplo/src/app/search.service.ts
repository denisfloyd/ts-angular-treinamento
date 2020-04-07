import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import SearchItem from './search-item-model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiRoot: string = 'http://itunes.apple.com/search';
  resultados: SearchItem[];
  loading: boolean; 
  
  constructor(private jsonp: Jsonp, private httpo: HttpClient) {
    this.resultados = [];
    this.loading = false;
  }

  pesquisa(termo: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${termo}&media=music&limit=20&callback=JSONP_CALLBACK`; 

      this.jsonp.get(apiURL)
        .toPromise()
        .then(
          resultado => {
            console.log(resultado);
            this.resultados = resultado.json().results.map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              )
            });

            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        )
    });

    return promise;
  }


  // exemplo com HttpClientJsonpModule
  pesquisaOb(termo: string): Observable<SearchItem[]> {
    console.log(termo);
    let apiURL = `${this.apiRoot}?term=${termo}&media=music&limit=20`;
    let callback = 'callback';

    return this.httpo.jsonp<any>(apiURL, callback)
      .pipe(
        map(data => data.results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          )
        }))

      )
  }

}
