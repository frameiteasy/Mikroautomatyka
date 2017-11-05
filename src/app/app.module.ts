import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { PersonsComponent } from './customers/customer-details/persons/persons.component';
import { PersonsListComponent } from './customers/customer-details/persons/persons-list/persons-list.component';
import { PersonListItemComponent } from './customers/customer-details/persons/persons-list/person-list-item/person-list-item.component';
import { DataComponent } from './data/data.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoggingService } from './services/logging.service';
import { ProjectListItemComponent } from './projects/projects-list/project-list-item/project-list-item.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { PersonAddComponent } from './customers/customer-details/persons/person-add/person-add.component';
import { DataService } from './services/data.service';
import { AppRoutingModule } from 'app/app-routing.module';
import { ElementsComponent } from './elements/elements.component';
import { ElementsListComponent } from './elements/elements-list/elements-list.component';
import { ElementsListItemComponent } from './elements/elements-list/elements-list-item/elements-list-item.component';
import { ElementsSearchComponent} from './elements/elements-search/elements-search.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SupplierSearchComponent } from './suppliers/supplier-search/supplier-search.component';
import { SupplierListMenuComponent } from './suppliers/supplier-list-menu/supplier-list-menu.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';
import { SuppliersListItemComponent } from './suppliers/suppliers-list/suppliers-list-item/suppliers-list-item.component';
import { SupplierDetailsComponent } from './suppliers/supplier-details/supplier-details.component';
import { CustomersModule } from './customers/customers.module';
import { ProjectDetailsComponent } from './project/project-details.component';
import { PickAndPlaceComponent } from './project/pick-and-place/pick-and-place.component';
import { BomComponent } from './project/bom/bom.component';
import { ElementsInProjectComponent } from './project/elements-in-project/elements-in-project.component';
import { ElementsInProjectItemComponent } from './project/elements-in-project/elements-in-project-item/elements-in-project-item.component';
import { ElementsInProjectSearchComponent } from './project/elements-in-project/elements-in-project-search/elements-in-project-search.component';
import { FilterElementsInProjectPipe } from './project/elements-in-project/filter-elements-in-project.pipe';
import { FilterSuppliersPipe } from './suppliers/suppliers-list/filter-suppliers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ProjectsComponent,
    ProjectsListComponent,
    PersonsComponent,
    PersonsListComponent,
    PersonListItemComponent,
    DataComponent,
    SuppliersComponent,
    DropdownDirective,
    ProjectListItemComponent,
    ProjectAddComponent,
    PersonAddComponent,
    ElementsComponent,
    ElementsListComponent,
    ElementsListItemComponent,
    ElementsSearchComponent,
    SuppliersListComponent,
    SupplierSearchComponent,
    SupplierListMenuComponent,
    SupplierEditComponent,
    SuppliersListItemComponent,
    SupplierDetailsComponent,
    ProjectDetailsComponent,
    PickAndPlaceComponent,
    BomComponent,
    ElementsInProjectComponent,
    ElementsInProjectItemComponent,
    ElementsInProjectSearchComponent,
    FilterElementsInProjectPipe,
    FilterSuppliersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CustomersModule
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private loggingService: LoggingService,
    private dataService: DataService) { }
}
