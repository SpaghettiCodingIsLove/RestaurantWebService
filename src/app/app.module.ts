import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TablesComponent } from './tables/tables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SalesComponent,
    MenuComponent,
    ReservationsComponent,
    TablesComponent,
    
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    AppRoutingModule,
	HttpClientModule,
  TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
}),
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}