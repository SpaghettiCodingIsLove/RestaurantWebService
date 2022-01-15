import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { Menu } from '../classes/menu';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public data: any;
	public initialized: boolean = false;  

  constructor(private api:ApiServiceService) { 
  }

  ngOnInit(): void {
	  this.api.getSalesData().subscribe(data=>{
      console.warn(data);
      this.data=data;
      this.initialized=true;
    })
  }
deleteSale(){
  
}
}
