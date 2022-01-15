import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Menu
{
    id: number;
    userId: number;
    title: string;
    body: string;
    
}

export interface OrderData{
    order : Order[];
}

export interface Order{
    id: string;
    user_id: string;
    ordered_food: Food[];
    city: string;
    street: string;
    housenumber: string;
    flatnumber: string;
    price: string;
    time: string;
    status: string;

}

export interface Food{
id:string;
name:string;
description: string;
kcal: string;
price: string;
type: string;
alergens: string;
isAvailable: string;
transport: string;
image: string;

}

export interface Sale{
    id:string;
description:string;
menuid: string;
condition: string;
enddate: string;
code: string;
value: string;
isActive:boolean;
}