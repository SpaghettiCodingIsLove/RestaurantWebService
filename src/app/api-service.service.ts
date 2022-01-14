import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private SERVERMenu: string = "https://restaurantpi.pythonanywhere.com/api/menu";
  private SERVEROrders: string = "https://restaurantpi.pythonanywhere.com/api/orders";
  private SERVERSales: string = "https://restaurantpi.pythonanywhere.com/api/sale";
  private SERVERReservations: string = "https://restaurantpi.pythonanywhere.com/api/reservations";
  private SERVERTables: string = "https://restaurantpi.pythonanywhere.com/api/tables";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
      
    })
  };
  constructor(private http: HttpClient) { }

  getMenuData()
  {
	  return this.http.get(this.SERVERMenu);
  }

  getOrderData()
  {
	  return this.http.get(this.SERVEROrders);
  }
  
  getSalesData()
  {
	  return this.http.get(this.SERVERSales);
  }

  getReservationsData()
  {
	  return this.http.get(this.SERVERReservations);
  }

  getTablessData()
  {
	  return this.http.get(this.SERVERTables);
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
