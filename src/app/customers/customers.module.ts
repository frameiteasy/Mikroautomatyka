import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerListItemComponent } from './customers-list/customer-list-item/customer-list-item.component';
import { CustomerListMenuComponent } from './customer-list-menu/customer-list-menu.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { AddCustomerComponent } from './customer-add/add-customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerStartComponent } from './customer-start/customer-start.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomerListItemComponent,
    CustomerListMenuComponent,
    CustomerDetailsComponent,
    CustomerSearchComponent,
    CustomerEditComponent,
    AddCustomerComponent,
    CustomerStartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule {}
