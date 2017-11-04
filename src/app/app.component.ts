import {Component} from '@angular/core';
import {CustomersService} from 'app/services/customers.service';
import {ProjectsService} from 'app/services/projects.service';
import {PersonsService} from 'app/customers/customer-details/persons/services/persons.service';
import {ElementsService} from './services/elements.service';
import {DataStorageService} from './services/ds-customer.service';
import {SuppliersService} from './services/suppliers.service';
import {SupplierDataStorageService} from './services/ds-supplier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CustomersService,
    SuppliersService,
    ProjectsService,
    PersonsService,
    ElementsService,
    DataStorageService,
    SupplierDataStorageService]
})
export class AppComponent {
  loadedFeature = 'customers';
  loggedOn = false;

  getLoadedFeature() {
    return this.loadedFeature;
  }

  getLoggedOn() {
    return this.loggedOn;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onLogin(loggedOn: boolean) {
    this.loggedOn = loggedOn;
  }

  onLogOff(loggedOff: boolean) {
    this.loggedOn = loggedOff;
  }
}
