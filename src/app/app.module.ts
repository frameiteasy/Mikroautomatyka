import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CustomerListItemComponent } from './customers/customers-list/customer-list-item/customer-list-item.component';
import { CustomersComponent } from './customers/customers.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerSearchComponent } from './customers/customer-search/customer-search.component';
import { CustomerListMenuComponent } from './customers/customer-list-menu/customer-list-menu.component';
import { PersonsComponent } from './customers/customer-details/persons/persons.component';
import { PersonsListComponent } from './customers/customer-details/persons/persons-list/persons-list.component';
import { PersonListItemComponent } from './customers/customer-details/persons/persons-list/person-list-item/person-list-item.component';
import { DataComponent } from './data/data.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoggingService } from './services/logging.service';
import { ProjectListItemComponent } from './projects/projects-list/project-list-item/project-list-item.component';
import { AddCustomerComponent } from './customers/customer-add/add-customer.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { PersonAddComponent } from './customers/customer-details/persons/person-add/person-add.component';
import { DataService } from './services/data.service';
import { AppRoutingModule } from 'app/app-routing.module';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentsListComponent } from './components/components-list/components-list.component';
import { ComponentsListItemComponent } from './components/components-list/components-list-item/components-list-item.component';
import { ComponentsSearchComponent } from './components/components-search/components-search.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SupplierSearchComponent } from './suppliers/supplier-search/supplier-search.component';
import { SupplierListMenuComponent } from './suppliers/supplier-list-menu/supplier-list-menu.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';
import { SuppliersListItemComponent } from './suppliers/suppliers-list/suppliers-list-item/suppliers-list-item.component';
import { SupplierDetailsComponent } from './suppliers/supplier-details/supplier-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CustomerListItemComponent,
    CustomersComponent,
    ProjectsComponent,
    ProjectsListComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CustomerSearchComponent,
    CustomerListMenuComponent,
    PersonsComponent,
    PersonsListComponent,
    PersonListItemComponent,
    DataComponent,
    SuppliersComponent,
    DropdownDirective,
    ProjectListItemComponent,
    AddCustomerComponent,
    ProjectAddComponent,
    PersonAddComponent,
    CustomerStartComponent,
    CustomerEditComponent,
    ComponentsComponent,
    ComponentsListComponent,
    ComponentsListItemComponent,
    ComponentsSearchComponent,
    SuppliersListComponent,
    SupplierSearchComponent,
    SupplierListMenuComponent,
    SupplierEditComponent,
    SuppliersListItemComponent,
    SupplierDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private loggingService: LoggingService,
    private dataService: DataService) { }
}
