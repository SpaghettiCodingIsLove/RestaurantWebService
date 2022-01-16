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
  public displayedColumns: string[] = ['id','name', 'description', 'kcal','price','type','alergens','isAvailable','transport'];

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
  this.api.getMenu4Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}

filterData2(){
  this.api.getMenu2Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}
filterData3(){
  this.api.getMenu3Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}
filterData4(){
  this.api.getMenu5Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}
filterData5(){
  this.api.getMenu6Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}
filterData6(){
  this.api.getMenu7Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}
filterData7(){
  this.api.getMenu8Data().subscribe(data=>{
    console.warn(data);
    this.data=data;
    
})
}

addProduct(){
  var json = {
    "name": (<HTMLInputElement>document.getElementById("name")).value,
    "description": (<HTMLInputElement>document.getElementById("description")).value,
    "kcal":(<HTMLInputElement>document.getElementById("kcal")).value,
    "price": (<HTMLInputElement>document.getElementById("price")).value,
    "type": (<HTMLInputElement>document.getElementById("type")).value,
    "alergens": (<HTMLInputElement>document.getElementById("alergens")).value,
    "isAvailable":true,
    "transport":true,
    "image":""
  }
  this.api.postAddProduct(json).subscribe(data=>{
    console.warn(data);
    this.data=data;
    this.ngOnInit()
  })
  }
}
