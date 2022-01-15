import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SalesComponent } from './sales/sales.component';
import { TablesComponent } from './tables/tables.component';


const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'reservations',
    component: ReservationsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
