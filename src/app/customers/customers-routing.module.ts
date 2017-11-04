import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerStartComponent } from './customer-start/customer-start.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { PersonsListComponent } from './customer-details/persons/persons-list/persons-list.component';
import { ProjectsListComponent } from '../projects/projects-list/projects-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PersonAddComponent } from './customer-details/persons/person-add/person-add.component';
import { ProjectAddComponent } from '../projects/project-add/project-add.component';

const customersRoutes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRoutingModule {}
