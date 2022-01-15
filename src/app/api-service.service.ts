import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { OrderData,Food } from './classes/menu';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private SERVERMenu: string = "https://restaurantpi.pythonanywhere.com/api/menu";
  private SERVERMenu2: string = "https://restaurantpi.pythonanywhere.com/api/menu?type=Zupy";
  private SERVERMenu3: string = "https://restaurantpi.pythonanywhere.com/api/menu?type=Danie główne";
  private SERVERMenu4: string = "https://restaurantpi.pythonanywhere.com/api/menu?type=Przystawki";
  private SERVERMenu5: string = "https://restaurantpi.pythonanywhere.com/api/menu?type=Sałatki";
  private SERVERMenu6: string = "https://restaurantpi.pythonanywhere.com/api/menu?type=Desery";
  private SERVERMenu7: string = "https://restaurantpi.pythonanywhere.com/api/menu?type=Napoje Gorące";
  private SERVERMenu8: string = "https://restaurantpi.pythonanywhere.com/api/menu?type=Napoje zimne";
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
  getMenu2Data()
  {
	  return this.http.get(this.SERVERMenu2);
  }
  getMenu3Data()
  {
	  return this.http.get(this.SERVERMenu3);
  }
  getMenu4Data()
  {
	  return this.http.get(this.SERVERMenu4);
  }
  getMenu5Data()
  {
	  return this.http.get(this.SERVERMenu5);
  }
  getMenu6Data()
  {
	  return this.http.get(this.SERVERMenu6);
  }
  getMenu7Data()
  {
	  return this.http.get(this.SERVERMenu7);
  }
  getMenu8Data()
  {
	  return this.http.get(this.SERVERMenu8);
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

  getTablesData()
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
