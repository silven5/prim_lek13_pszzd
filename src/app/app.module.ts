import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './reducer/customer.reducer';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  declarations: [AppComponent, CustomersViewComponent, CustomerAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ customers: CustomerReducer }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
