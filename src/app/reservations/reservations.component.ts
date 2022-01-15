import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { Menu } from '../classes/menu';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
	
  public data: any;
	public initialized: boolean = false;  

  constructor(private api:ApiServiceService) { 
  }

  ngOnInit(): void {
	  this.api.getReservationsData().subscribe(data=>{
      console.warn(data);
      this.data=data;
      this.initialized=true;
    })
  }

  cancelReservation(id:any, status:any){
    if(status!='Anulowano'){
      this.api.putCancelReservation(id).subscribe(data=>{
        console.warn(data);
        this.data=data;
        this.ngOnInit()
        
    })
    
  }
  else{
alert("Rezerwacja jest już anulowana");
  }
  }

}