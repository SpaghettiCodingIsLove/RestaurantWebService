import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { Menu, OrderData } from '../classes/menu';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orderData?: any;
  public food: any;
	public initialized: boolean = false;  

  constructor(private api:ApiServiceService) { 
  }

  ngOnInit(): void {
	  this.api.getOrderData().subscribe(data=>{
      console.warn(data);
      this.orderData=data;
      this.initialized=true;
      
    })
  

}

}
