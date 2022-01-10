import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private SERVER: string = "https://restaurantpi.pythonanywhere.com/api/menu";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
      
    })
  };
  constructor(private http: HttpClient) { }

  getData()
  {
	  return this.http.get(this.SERVER);
  }
  

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
}
