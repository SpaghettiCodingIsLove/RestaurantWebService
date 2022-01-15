import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { Menu } from '../classes/menu';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public data: any;
	public initialized: boolean = false;  
  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
	  this.api.getTablesData().subscribe(data=>{
      console.warn(data);
      this.data=data;
      this.initialized=true;
    })
  }

}
