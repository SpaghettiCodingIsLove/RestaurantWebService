import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { Menu } from '../classes/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  
	public data: any;
	public initialized: boolean = false;  

  constructor(private api:ApiServiceService) { 
  }

  ngOnInit(): void {
	  this.api.getMenuData().subscribe(data=>{
      console.warn(data);
      this.data=data;
      this.initialized=true;
      
    })
  }
filterData1(){
  this.api.getMenu2Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}

filterData2(){
  this.api.getMenu3Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}
}
