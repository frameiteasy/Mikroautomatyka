import {Customer} from '../models/customer.model';
import {Person} from '../models/person.model';
import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';
import {Project} from '../models/project.model';
import {Status} from '../models/status.model';
import {DataService} from './data.service';
import {DataStorageService} from './ds-customer.service';
import {ElementInProject} from '../models/element-in-project.model';
import {ElementsService} from './elements.service';
import {SuppliersService} from './suppliers.service';

@Injectable()
export class CustomersService {

  private customerSelected = new EventEmitter<Customer>();
  private customersChanged = new EventEmitter<Customer[]>();
  private personsChanged = new EventEmitter<Person[]>();
  private customerFeatureSelected = new EventEmitter<string>();
  private addCustomerSelected = new EventEmitter();
  private addingCustomerCancelled = new EventEmitter();
  private removeCustomerSelected = new EventEmitter();
  private addingPersonSelected = new EventEmitter();
  private removePersonsSelected = new EventEmitter();
  private addingPersonCancelled = new EventEmitter();
  private customers: Customer[] = [];
  private statuses: Status[];
  private selectedCustomer: Customer;
  private selectedProject: Project;

  constructor(private logging: LoggingService,
              private dataService: DataService,
              private dataStorageService: DataStorageService,
              private elementsService: ElementsService,
              private suppliersService: SuppliersService) {
    this.init();
  }

  storeCustomers() {
    this.dataStorageService.storeCustomers(this.getCustomers());
  }

  getAddingPersonSelected(): EventEmitter<any> {
    return this.addingPersonSelected;
  }

  getPersonsByCustomerIndex(index: number): Person[] {
    return this.customers[index].getPersons();
  }

  getProjectsByCustomerIndex(index: number): Project[] {
    return this.customers[index].getProjects();
  }

  // setCustomerSelected(customer: Customer) {
  //   this.selectedCustomer = customer;
  //   this.customerSelected.emit(this.selectedCustomer);
  // }

  init() {
    this.statuses = this.dataService.getStatuses();
    console.log('init customers');
    // this.loadCustomers();
    this.loadTestCustomers();
  }


  loadCustomers() {
    this.dataStorageService.getCustomers()
      .subscribe(
        (customers: Customer[]) => {
          this.customers = customers;
          this.customersChanged.emit(this.customers.slice());
        },
        (error) => {
          console.log(error)
        }
      );

  }

  getCustomerSelected() {
    return this.customerSelected;
  }

  getCustomersChanged() {
    return this.customersChanged;
  }

  getCustomerByIndex(index: number): Customer {
    if (index < this.customers.length) {
      return this.customers[index];
    }
    return null;
  }

  getCustomerFeatureSelected() {
    return this.customerFeatureSelected;
  }

  getCustomers() {
    return this.customers.slice();
  }

  saveCustomer(customer: Customer) {

  }

  public letAddCustomer() {
    this.getAddCustomerSelected().emit();
  }

  getAddCustomerSelected() {
    return this.addCustomerSelected;
  }

  public letRemoveCustomers() {
    return this.removeCustomerSelected.emit();
  }

  addCustomer(name: string, email: string) {
    let customer: Customer;
    customer = this.createCustomer(name, email);
    this.customers.push(customer);
    this.customersChanged.emit(this.customers.slice());
  }

  createCustomer(name: string, email: string): Customer {
    let id: number;
    let customer: Customer;

    id = this.dataService.getIdForCustomer();
    customer = new Customer(id, name, email, [], []);
    return customer;
  }

  cancelAddingCustomer() {
    this.addingCustomerCancelled.emit();
  }

  getAddingCustomerCancelled() {
    return this.addingCustomerCancelled;
  }

  getAddingPersonCancelled() {
    return this.addingPersonCancelled;
  }

  public getSelectedCustomer(): Customer {
    return this.selectedCustomer;
  }

  letRemovePersons(): void {
    this.removePersonsSelected.emit();
  }

  loadTestCustomers() {
    this.customers = this.generateTestCustomers();
    this.suppliersService.getSuppliersChanged()
      .subscribe(
        () => {
          this.customers = this.generateTestCustomers();
          console.log('CUSTOMERS RELOAD [getSuppliersChanged]');
        }
      )
  }

  generateTestCustomers() {

    console.log('CUSTOMER.SERVICE [generateTestCustomers()]');

    let dasko: Customer;
    let proj: Project;
    let s1: Status;
    let s2: Status;
    let s3: Status;

    s1 = this.dataService.getStatusByName('nowy');
    s2 = this.dataService.getStatusByName('realizowany');
    s3 = this.dataService.getStatusByName('ukończony');

    dasko = this.createCustomer('Dasko', 'biuro@dasko.pl');

    proj = new Project(1, 'CSR-B_ECO1.5-XC1-2-a3', s1, 'CSR-B_ECO1_5_XC1-2_BOM_a3.xlsx',
      'Pick Place for CSR-B_ECO1.5-XC1-2.csv', dasko.getId());

    proj.addElement(new ElementInProject(1, this.elementsService.getElementByName('pcb CSR-B_ECO1.5-XC1-2_GB'),1, this.suppliersService.getSupplierByName('T-S'), 25));
    proj.addElement(new ElementInProject(2, this.elementsService.getElementByName('rez 2010 100k 400v CRCW2010100KFKEF'),1, this.suppliersService.getSupplierByName('Dasko'), 25));
    proj.addElement(new ElementInProject(3, this.elementsService.getElementByName('rez 1206 0R'),14, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(4, this.elementsService.getElementByName('rez 1206 2R2 5%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(5, this.elementsService.getElementByName('rez 1206 75R 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(6, this.elementsService.getElementByName('rez 1206 430R 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(7, this.elementsService.getElementByName('rez 1206 1k5 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(8, this.elementsService.getElementByName('drabinka 4x680R 1206 5%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(9, this.elementsService.getElementByName('drabinka 4x10k 1206 5%'),4, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(10, this.elementsService.getElementByName('rez 0805 0R'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(11, this.elementsService.getElementByName('rez 0805 1R5 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(12, this.elementsService.getElementByName('rez 0805 15R 1%'),4, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(13, this.elementsService.getElementByName('rez 0805 33R 1%'),9, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(14, this.elementsService.getElementByName('rez 0805 75R 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(15, this.elementsService.getElementByName('rez 0805 270R 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(16, this.elementsService.getElementByName('rez 0805 470R 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(17, this.elementsService.getElementByName('rez 0805 1k 1%'),6, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(18, this.elementsService.getElementByName('rez 0805 1k1 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(19, this.elementsService.getElementByName('rez 0805 1k5 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(20, this.elementsService.getElementByName('rez 0805 1k6 1%'),3, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(21, this.elementsService.getElementByName('rez 0805 2k 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(22, this.elementsService.getElementByName('rez 0805 2k2 1%'),3, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(23, this.elementsService.getElementByName('rez 0805 2k7 1%'),8, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(24, this.elementsService.getElementByName('rez 0805 3k 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(25, this.elementsService.getElementByName('rez 0805 3k9 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(26, this.elementsService.getElementByName('rez 0805 4k7 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(27, this.elementsService.getElementByName('rez 0805 6k2 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(28, this.elementsService.getElementByName('rez 0805 9k1 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(29, this.elementsService.getElementByName('rez 0805 10k 1%'),17, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(30, this.elementsService.getElementByName('rez 0805 12k 1%'),2, this.suppliersService.getSupplierByName('TME'), 25));
    proj.addElement(new ElementInProject(31, this.elementsService.getElementByName('rez 0805 18k 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(32, this.elementsService.getElementByName('rez 0805 20k 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(33, this.elementsService.getElementByName('rez 0805 22k 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(34, this.elementsService.getElementByName('rez 0805 43k 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(35, this.elementsService.getElementByName('rez 0805 47k 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(36, this.elementsService.getElementByName('rez 0805 100k 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(37, this.elementsService.getElementByName('rez 0805 330k 1%'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(38, this.elementsService.getElementByName('rez 0805 1M 1%'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(39, this.elementsService.getElementByName('bezp. polimerowy RFSN012 1206 0,12A/30V 4kT'),3, this.suppliersService.getSupplierByName('Maritex'), 25));
    proj.addElement(new ElementInProject(40, this.elementsService.getElementByName('bezp. polimerowy RFSN035 0,35A 6V 4kT'),3, this.suppliersService.getSupplierByName('Maritex'), 25));
    proj.addElement(new ElementInProject(41, this.elementsService.getElementByName('dioda BAS20 sot23 3kT'),4, this.suppliersService.getSupplierByName('Future/EBV'), 25));
    proj.addElement(new ElementInProject(42, this.elementsService.getElementByName('dioda BAV103 sod80 2k5T'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(43, this.elementsService.getElementByName('dioda PMLL4148L,115 sod80 2k5T'),12, this.suppliersService.getSupplierByName('Masters'), 25));
    proj.addElement(new ElementInProject(44, this.elementsService.getElementByName('schottky SS1H10-E3/61T 1,8kT 1A/100V SMA za SS18'),2, this.suppliersService.getSupplierByName('EBV/Future'), 25));
    proj.addElement(new ElementInProject(45, this.elementsService.getElementByName('dioda STTH3R06S SMC 2k5T'),9, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(46, this.elementsService.getElementByName('dioda zenera BZT52C6V8-7-F SOD123'),4, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(47, this.elementsService.getElementByName('dioda zenera BZT52C13-7-F SOD123'),1, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(48, this.elementsService.getElementByName('dioda zenera BZT52B18-7-F SOD123 /BZT52C18'),1, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(49, this.elementsService.getElementByName('dioda STTH1R06A SMA 5kt'),4, this.suppliersService.getSupplierByName('Future/EBV'), 25));
    proj.addElement(new ElementInProject(50, this.elementsService.getElementByName('led 0805 green 3kT'),4, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(51, this.elementsService.getElementByName('led 0805 red 3kT'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(52, this.elementsService.getElementByName('BLM18HG102SN1D / WE 742 792 66 4kT 200mA'),6, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(53, this.elementsService.getElementByName('dławik WE 744 031 101 (100uH 250mA 3816) MOQ 1kT'),2, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(54, this.elementsService.getElementByName('dławik WE 744 053 101 (100uH 450mA) 400szt rolka'),3, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(55, this.elementsService.getElementByName('dławik WE 744 066 101 (100uH 1,2A 2038) SPQ (rolka)800, zam. X 065 x'),1, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(56, this.elementsService.getElementByName('kond.alum. LowZ 22u 50V NACZ220M50V6.3X6.3TR13F 800szt WE 865060643006 3kT'),2, this.suppliersService.getSupplierByName('Future/WE'), 25));
    proj.addElement(new ElementInProject(57, this.elementsService.getElementByName('kond.alum. 100u/35V LZ EMZA350ADA101MF80G   900T'),1, this.suppliersService.getSupplierByName('compact'), 25));
    proj.addElement(new ElementInProject(58, this.elementsService.getElementByName('kond.ceram. 0805 33p 50V'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(59, this.elementsService.getElementByName('kond.ceram. 0805 56p 50V'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(60, this.elementsService.getElementByName('kond.ceram. 0805 470p 50V'),5, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(61, this.elementsService.getElementByName('kond.ceram. 0805 1n 50V'),3, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(62, this.elementsService.getElementByName('kond.ceram. 0805 3n3 50V'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(63, this.elementsService.getElementByName('kond.ceram. 0805 10n 50V X7R'),1, this.suppliersService.getSupplierByName('TME'), 25));
    proj.addElement(new ElementInProject(64, this.elementsService.getElementByName('kond.ceram. 0805 22n 50V X5R'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(65, this.elementsService.getElementByName('kond.ceram. 0805 100n 50V X7R   CL21B104KBCNNNC'),26, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(66, this.elementsService.getElementByName('kond.ceram. 0805 220n 50V X7R  CL21B224KBFNNNG 3kT'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(67, this.elementsService.getElementByName('kond.ceram. 0805 330n X7R'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(68, this.elementsService.getElementByName('kond.ceram. 0805 1u 50V X7R   CL21B105KBFNNNE lub alt, 3k'),17, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(69, this.elementsService.getElementByName('kond.ceram. 1206 4n7 50V 4,7n NPO'),3, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(70, this.elementsService.getElementByName('kond.ceram. 1206 10n 50V X7R'),3, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(71, this.elementsService.getElementByName('kond.ceram. 1206 470n 50V X7R'),3, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(72, this.elementsService.getElementByName('kond.ceram. 1206 10u/25V X5R 2kT CL31A106KAHNNNE'),12, this.suppliersService.getSupplierByName('Future/TME'), 25));
    proj.addElement(new ElementInProject(73, this.elementsService.getElementByName('kond. ceram. CC1808X102K302T	1808 1n 3kV 2k   1808HC102KAT1A'),3, this.suppliersService.getSupplierByName('Future/compact'), 25));
    proj.addElement(new ElementInProject(74, this.elementsService.getElementByName('kwarc zegarkowy ABS25-32.768KHZ-6-1T 3kT Epson MC-306-32.768K-E3'),1, this.suppliersService.getSupplierByName('Avnet'), 25));
    proj.addElement(new ElementInProject(75, this.elementsService.getElementByName('przełącznik TACTM-67N-F Ninigi MPQ 750 /KAN0641-0701B'),6, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(76, this.elementsService.getElementByName('transoptor LTV-356T-B lub C MFP-4 750rolka=3kT'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(77, this.elementsService.getElementByName('tranzystor BC847B,215 sot23 3kT'),2, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(78, this.elementsService.getElementByName('tranzystor BCP56-16 npn sot223, 1kT'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(79, this.elementsService.getElementByName('tranzystor BSS138 sot23 3kT'),1, this.suppliersService.getSupplierByName('EBV/Masters'), 25));
    proj.addElement(new ElementInProject(80, this.elementsService.getElementByName('tranzystor BSS84P sot23 BSS84-7-F 3kT'),2, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(81, this.elementsService.getElementByName('74HC107 SO14'),1, this.suppliersService.getSupplierByName('TME'), 25));
    proj.addElement(new ElementInProject(82, this.elementsService.getElementByName('74HCT132D SO14 57T, 2,5kT'),2, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(83, this.elementsService.getElementByName('74HCT221 SO16'),1, this.suppliersService.getSupplierByName('TME/EBV'), 25));
    proj.addElement(new ElementInProject(84, this.elementsService.getElementByName('LM317LD13TR (LMX) SO8'),2, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(85, this.elementsService.getElementByName('TLC272CD SO8'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(86, this.elementsService.getElementByName('LM5010AMH MPQ94 / AMHX NOPB 2k5T'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(87, this.elementsService.getElementByName('MCP79400T-I/SN SO8 zegarek'),1, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(88, this.elementsService.getElementByName('ST485EBDR SO8 (15kV) 2k5T'),1, this.suppliersService.getSupplierByName('Future'), 25));
    proj.addElement(new ElementInProject(89, this.elementsService.getElementByName('TL431IDR SO8 2k5T'),1, this.suppliersService.getSupplierByName('Raftronik'), 25));
    proj.addElement(new ElementInProject(90, this.elementsService.getElementByName('warystor B72520T140K62 Epcos 1206 WE - 82531140'),2, this.suppliersService.getSupplierByName('TME/Fut/WE'), 25));
    proj.addElement(new ElementInProject(91, this.elementsService.getElementByName('TVS-824021 sot23 MOQ 3kT WE'),1, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(92, this.elementsService.getElementByName('7447785002 spq 1000'),1, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(93, this.elementsService.getElementByName('WE-74279221111 1206'),2, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(94, this.elementsService.getElementByName('Wurth 610 016 119 21 1x16 żeńskie smd    MPQ14 WE'),1, this.suppliersService.getSupplierByName('WE'), 25));
    proj.addElement(new ElementInProject(95, this.elementsService.getElementByName('STM8S207RBT6'),1, this.suppliersService.getSupplierByName('Dasko'), 25));
    proj.addElement(new ElementInProject(96, this.elementsService.getElementByName('STM8S105K6T3C 1500op'),1, this.suppliersService.getSupplierByName('Dasko'), 25));
    proj.addElement(new ElementInProject(97, this.elementsService.getElementByName('ICE2QR4765G'),1, this.suppliersService.getSupplierByName('Dasko'), 25));
    proj.addElement(new ElementInProject(98, this.elementsService.getElementByName('TLP352(TP1,F) Toshiba'),2, this.suppliersService.getSupplierByName('Dasko'), 25));

    dasko.addProject(proj);

    dasko.addProject(new Project(2, 'UNIBOX   LITE v2.0', s2, '', '', dasko.getId()));
    dasko.addProject(new Project(3, 'KTE_v03p2-4', s2, '', '', dasko.getId()));
    dasko.addProject(new Project(4, 'KTE4v2', s2, '', '', dasko.getId()));
    dasko.addProject(new Project(5, 'VNT20_v30 5x1panel', s2, '', '', dasko.getId()));
    dasko.addProject(new Project(6, 'CHE2v2', s2, '', '', dasko.getId()));
    dasko.addProject(new Project(7, 'DSS2T_2.7', s2, '', '', dasko.getId()));
    dasko.addProject(new Project(8, 'DSS2Tv3', s3, '', '', dasko.getId()));
    dasko.addProject(new Project(9, 'DSS2C v6.2', s3, '', '', dasko.getId()));
    dasko.addProject(new Project(10, 'DEN11v2 nastawnik', s3, '', '', dasko.getId()));
    dasko.addPerson(new Person('Adam', 'Dasko', 'adasko@dasko.pl'));

    return [dasko];
  }

}
