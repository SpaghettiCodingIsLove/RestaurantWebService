import { Component, OnInit} from '@angular/core';
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

changeStatus(id:any, status:any){
  
  if(status.trim()=="Opłacony" || status.trim()=="Do opłacenia" || status.trim()=="Przygotowywany"){
    var newstatus=prompt("Podaj nowy status");
    if(newstatus!=status && newstatus!=null && newstatus!="" && (newstatus=="Anulowano" || newstatus=="Opłacony" || newstatus=="Dostarczono" || newstatus=="Przygotowywany")){
      this.api.putUpdateOrder(id, newstatus).subscribe(data=>{
        console.warn(data)
        this.orderData=data
        this.ngOnInit()
      })
    }else{
      alert("Proszę podać inny status");
    }
  }else{
    alert("Nie można zmienić statusu")
  }
}

}

