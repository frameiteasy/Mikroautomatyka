import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from 'app/login/login.component';
import {CustomersComponent} from 'app/customers/customers.component';
import {ProjectsComponent} from 'app/projects/projects.component';
import {PersonsListComponent} from 'app/customers/customer-details/persons/persons-list/persons-list.component';
import {ProjectsListComponent} from 'app/projects/projects-list/projects-list.component';
import {SuppliersComponent} from 'app/suppliers/suppliers.component';
import {CustomerStartComponent} from 'app/customers/customer-start/customer-start.component';
import {CustomerDetailsComponent} from 'app/customers/customer-details/customer-details.component';
import {CustomerEditComponent} from 'app/customers/customer-edit/customer-edit.component';
import {PersonAddComponent} from 'app/customers/customer-details/persons/person-add/person-add.component';
import {ProjectAddComponent} from 'app/projects/project-add/project-add.component';
import {ComponentsComponent} from './components/components.component';
import {SupplierEditComponent} from './suppliers/supplier-edit/supplier-edit.component';
import {SupplierDetailsComponent} from './suppliers/supplier-details/supplier-details.component';

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
              {path: ':idp/edit', component: ProjectAddComponent} // ProjectEditComponent
            ]
          },
        ]
      },
    ]
  },
  {path: 'projects', component: ProjectsComponent},
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
    path: 'components', component: ComponentsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
