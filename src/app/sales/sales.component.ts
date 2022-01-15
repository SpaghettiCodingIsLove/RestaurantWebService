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

  public description = "";
  public menuid = 0;
  public condition = 0;
  public enddate = "";
  public code = "";
  public value = 0;
  public data: any;
	public initialized: boolean = false;  

  constructor(private api:ApiServiceService) { 
  }

  descriptionChanged(ob: any){
    this.description = ob.value;
  }
  menuidChanged(ob: any){
    this.menuid = ob.value;
  }
  conditionChanged(ob: any){
    this.condition = ob.value;
  }
  enddateChanged(ob: any){
    this.enddate = ob.value;
  }
  codeChanged(ob: any){
    this.code = ob.value;
  }
  valueChanged(ob: any){
    this.value = ob.value;
  }

  ngOnInit(): void {
	  this.api.getSalesData().subscribe(data=>{
      console.warn(data);
      this.data=data;
      this.initialized=true;
    })
  }
cancelSale(id:any){
this.api.putCancelSale(id).subscribe(data=>{
  console.warn(data);
  this.data=data;
  this.ngOnInit()
})
}
addSale(description:any,
  menuid:any,
  condition:any,
  enddate:any,
  code:any,
  value1:any){
  var json = {
    "description": description,
    "menuid": menuid,
    "condition":condition,
    "enddate": enddate,
    "code": code,
    "value": value1
  }
  this.api.postAddSale(json).subscribe(data=>{
    console.warn(data);
    this.data=data;
    this.ngOnInit()
  })
  }

}



