///<reference path="customers/customers.component.ts"/>
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from 'app/login/login.component';
import {ProjectsComponent} from 'app/projects/projects.component';
import {PersonsListComponent} from 'app/customers/customer-details/persons/persons-list/persons-list.component';
import {SuppliersComponent} from 'app/suppliers/suppliers.component';
import {PersonAddComponent} from 'app/customers/customer-details/persons/person-add/person-add.component';
import {ElementsComponent} from './elements/elements.component';
import {SupplierEditComponent} from './suppliers/supplier-edit/supplier-edit.component';
import {SupplierDetailsComponent} from './suppliers/supplier-details/supplier-details.component';
import {CustomersComponent} from './customers/customers.component';
import {CustomerStartComponent} from './customers/customer-start/customer-start.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {ProjectsListComponent} from './projects/projects-list/projects-list.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {ProjectAddComponent} from './projects/project-add/project-add.component';
import {ProjectDetailsComponent} from './project/project-details.component';
import {PickAndPlaceComponent} from './project/pick-and-place/pick-and-place.component';
import {BomComponent} from './project/bom/bom.component';
import {ElementsInProjectComponent} from './project/elements-in-project/elements-in-project.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'customers', component: CustomersComponent,
    children: [
      {path: '', component: CustomerStartComponent},
      {path: 'new', component: CustomerEditComponent},
      {
        path: ':id/edit', component: CustomerEditComponent,
        children: [
          {path: 'persons', component: PersonsListComponent},
          {path: 'projects', component: ProjectsListComponent},
        ]
      },
      {
        path: ':id', component: CustomerDetailsComponent,
        children: [
          {
            path: 'persons', component: PersonsListComponent,
            children: [
              {path: 'new', component: PersonAddComponent}, // PersonEditComponent
              {path: ':idp/edit', component: PersonAddComponent} // PersonEditComponent
            ]
          },
          {
            path: 'projects', component: ProjectsListComponent,
            children: [
              {path: 'new', component: ProjectAddComponent}, // ProjectEditComponent
              {path: ':idp', component: ProjectDetailsComponent},
              {path: ':idp/edit', component: ProjectAddComponent} // ProjectEditComponent
            ]
          },
        ]
      },
    ]
  },
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/:idCustomer/:idProject', component: ProjectDetailsComponent,
    children: [
      {path: 'components', component: ElementsInProjectComponent},
      {path: 'pickandplace', component: PickAndPlaceComponent},
      {path: 'bom', component: BomComponent},
      {path: 'persons', component: PersonsListComponent}
    ]},
  {path: 'suppliers', component: SuppliersComponent,
    children: [
      {path: 'new', component: SupplierEditComponent},
      {path: ':ids', component: SupplierDetailsComponent,
        children: [
          {path: 'edit', component: SupplierEditComponent},
          {path: 'persons', component: PersonsListComponent,
            children: [
              {path: 'new', component: PersonAddComponent}, // PersonEditComponent
              {path: ':idp/edit', component: PersonAddComponent} // PersonEditComponent
            ]}
        ]}
    ]},
  {
    path: 'components', component: ElementsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
