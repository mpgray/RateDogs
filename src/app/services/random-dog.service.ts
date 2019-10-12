import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const SERVER = 'https://dog.ceo/api/breeds/image/random';

export interface IDog {
  message: string;
  status: string;
}



@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  constructor(private http: HttpClient) { }


  getDog(): Observable<IDog> {
    return this.http.get<IDog>(SERVER)
      .pipe(catchError(this.handleError('getDog', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: IDog): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
