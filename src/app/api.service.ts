import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Airplanes } from 'src/model/airplanes';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://localhost:44355/api/Airplane';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  getAirplanes (): Observable<Airplanes[]> {
    return this.http.get<Airplanes[]>(apiUrl)
      .pipe(
        tap(airplanes => console.log('leu os airplanes')),
        catchError(this.handleError('getAirplanes', []))
      );
  }

  getAirplane(id: number): Observable<Airplanes> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Airplanes>(url).pipe(
      tap(_ => console.log(`leu o airplane id=${id}`)),
      catchError(this.handleError<Airplanes>(`getAirplanes id=${id}`))
    );
  }

  addAirplanes (airplanes): Observable<Airplanes> {
    console.log('dentro da api services',airplanes);
    return this.http.post<Airplanes>(apiUrl, airplanes, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((airplanes: Airplanes) => console.log(`adicionou o airplane com w/ id=${airplanes.id}`)),
      catchError(this.handleError<Airplanes>('addAirplanes'))
    );
  }

  updateAirplanes(id, airplanes): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, airplanes, httpOptions).pipe(
      tap(_ => console.log(`atualiza o airplane com id=${id}`)),
      catchError(this.handleError<any>('updateAirplanes'))
    );
  }

  deleteAirplanes (id): Observable<Airplanes> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Airplanes>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o airplane com id=${id}`)),
      catchError(this.handleError<Airplanes>('deleteAirplanes'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
  constructor(private http: HttpClient) { }
}
