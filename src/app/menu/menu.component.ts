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
	  

  constructor(private api:ApiServiceService) { 
  }

  ngOnInit(): void {
	  this.api.getData().subscribe(data=>{
      console.warn(data);
      this.data=data;
    })
  }

}
