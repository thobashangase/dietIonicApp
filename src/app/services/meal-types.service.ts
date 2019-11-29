import { Injectable } from '@angular/core';
import { MealType } from '../models/meal-type';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealTypesService {

  apiurl = 'https://localhost:44398/api/mealtypes';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error); 
    return throwError(error);
  }

  getMealTypes(): Observable<MealType[]> {
    return this.http.get<MealType[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
