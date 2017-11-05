import { EventEmitter, Injectable } from '@angular/core';
import { Element } from '../models/element.model';
import { DataService } from './data.service';
import { ElementName } from '../models/element-name.model';

@Injectable()
export class ElementsService {
  elements: Element[];
  private filterElementsChanged = new EventEmitter<string>();

  constructor(private dataService: DataService) {
    this.init();
  }

  private init() {
    this.elements = this.loadTestElements();
  }

  public getFilterElementsChanged() {
    return this.filterElementsChanged;
  }

  getElements() {
    // this.elements = this.dataService.getElements();
    return this.elements;
  }

  getElementByName(name: string): Element {
    for (const element of this.elements) {
      if (element.getName().getName() === name) {
        return element;
      }
    }
    return null;
  }

  getElementsQuantity(element: Element) {
    return 1500; // TODO wyznaczyć całkowitą liczbę sztuk danego elementu
  }

  loadTestElements() {
    const testElements: Element[] = [];
    testElements.push(new Element(1, new ElementName('', null, null, null, 'pcb CSR-B_ECO1.5-XC1-2_GB'), '', 20, 10));
    testElements.push(new Element(2, new ElementName('', null, null, null, 'rez 2010 100k 400v CRCW2010100KFKEF'), '', 20, 10));
    testElements.push(new Element(3, new ElementName('', null, null, null, 'rez 1206 0R'), '', 20, 10));
    testElements.push(new Element(4, new ElementName('', null, null, null, 'rez 1206 2R2 5%'), '', 20, 10));
    testElements.push(new Element(5, new ElementName('', null, null, null, 'rez 1206 75R 1%'), '', 20, 10));
    testElements.push(new Element(6, new ElementName('', null, null, null, 'rez 1206 430R 1%'), '', 20, 10));
    testElements.push(new Element(7, new ElementName('', null, null, null, 'rez 1206 1k5 1%'), '', 20, 10));
    testElements.push(new Element(8, new ElementName('', null, null, null, 'drabinka 4x680R 1206 5%'), '', 20, 10));
    testElements.push(new Element(9, new ElementName('', null, null, null, 'drabinka 4x10k 1206 5%'), '', 20, 10));
    testElements.push(new Element(10, new ElementName('', null, null, null, 'rez 0805 0R'), '', 20, 10));
    testElements.push(new Element(11, new ElementName('', null, null, null, 'rez 0805 1R5 1%'), '', 20, 10));
    testElements.push(new Element(12, new ElementName('', null, null, null, 'rez 0805 15R 1%'), '', 20, 10));
    testElements.push(new Element(13, new ElementName('', null, null, null, 'rez 0805 33R 1%'), '', 20, 10));
    testElements.push(new Element(14, new ElementName('', null, null, null, 'rez 0805 75R 1%'), '', 20, 10));
    testElements.push(new Element(15, new ElementName('', null, null, null, 'rez 0805 270R 1%'), '', 20, 10));
    testElements.push(new Element(16, new ElementName('', null, null, null, 'rez 0805 470R 1%'), '', 20, 10));
    testElements.push(new Element(17, new ElementName('', null, null, null, 'rez 0805 1k 1%'), '', 20, 10));
    testElements.push(new Element(18, new ElementName('', null, null, null, 'rez 0805 1k1 1%'), '', 20, 10));
    testElements.push(new Element(19, new ElementName('', null, null, null, 'rez 0805 1k5 1%'), '', 20, 10));
    testElements.push(new Element(20, new ElementName('', null, null, null, 'rez 0805 1k6 1%'), '', 20, 10));
    testElements.push(new Element(21, new ElementName('', null, null, null, 'rez 0805 2k 1%'), '', 20, 10));
    testElements.push(new Element(22, new ElementName('', null, null, null, 'rez 0805 2k2 1%'), '', 20, 10));
    testElements.push(new Element(23, new ElementName('', null, null, null, 'rez 0805 2k7 1%'), '', 20, 10));
    testElements.push(new Element(24, new ElementName('', null, null, null, 'rez 0805 3k 1%'), '', 20, 10));
    testElements.push(new Element(25, new ElementName('', null, null, null, 'rez 0805 3k9 1%'), '', 20, 10));
    testElements.push(new Element(26, new ElementName('', null, null, null, 'rez 0805 4k7 1%'), '', 20, 10));
    testElements.push(new Element(27, new ElementName('', null, null, null, 'rez 0805 6k2 1%'), '', 20, 10));
    testElements.push(new Element(28, new ElementName('', null, null, null, 'rez 0805 9k1 1%'), '', 20, 10));
    testElements.push(new Element(29, new ElementName('', null, null, null, 'rez 0805 10k 1%'), '', 20, 10));
    testElements.push(new Element(30, new ElementName('', null, null, null, 'rez 0805 12k 1%'), '', 20, 10));
    testElements.push(new Element(31, new ElementName('', null, null, null, 'rez 0805 18k 1%'), '', 20, 10));
    testElements.push(new Element(32, new ElementName('', null, null, null, 'rez 0805 20k 1%'), '', 20, 10));
    testElements.push(new Element(33, new ElementName('', null, null, null, 'rez 0805 22k 1%'), '', 20, 10));
    testElements.push(new Element(34, new ElementName('', null, null, null, 'rez 0805 43k 1%'), '', 20, 10));
    testElements.push(new Element(35, new ElementName('', null, null, null, 'rez 0805 47k 1%'), '', 20, 10));
    testElements.push(new Element(36, new ElementName('', null, null, null, 'rez 0805 100k 1%'), '', 20, 10));
    testElements.push(new Element(37, new ElementName('', null, null, null, 'rez 0805 330k 1%'), '', 20, 10));
    testElements.push(new Element(38, new ElementName('', null, null, null, 'rez 0805 1M 1%'), '', 20, 10));
    testElements.push(new Element(39, new ElementName('', null, null, null, 'bezp. polimerowy RFSN012 1206 0,12A/30V 4kT'), '', 20, 10));
    testElements.push(new Element(40, new ElementName('', null, null, null, 'bezp. polimerowy RFSN035 0,35A 6V 4kT'), '', 20, 10));
    testElements.push(new Element(41, new ElementName('', null, null, null, 'dioda BAS20 sot23 3kT'), '', 20, 10));
    testElements.push(new Element(42, new ElementName('', null, null, null, 'dioda BAV103 sod80 2k5T'), '', 20, 10));
    testElements.push(new Element(43, new ElementName('', null, null, null, 'dioda PMLL4148L,115 sod80 2k5T'), '', 20, 10));
    testElements.push(new Element(44, new ElementName('', null, null, null, 'schottky SS1H10-E3/61T 1,8kT 1A/100V SMA za SS18'), '', 20, 10));
    testElements.push(new Element(45, new ElementName('', null, null, null, 'dioda STTH3R06S SMC 2k5T'), '', 20, 10));
    testElements.push(new Element(46, new ElementName('', null, null, null, 'dioda zenera BZT52C6V8-7-F SOD123'), '', 20, 10));
    testElements.push(new Element(47, new ElementName('', null, null, null, 'dioda zenera BZT52C13-7-F SOD123'), '', 20, 10));
    testElements.push(new Element(48, new ElementName('', null, null, null, 'dioda zenera BZT52B18-7-F SOD123 /BZT52C18'), '', 20, 10));
    testElements.push(new Element(49, new ElementName('', null, null, null, 'dioda STTH1R06A SMA 5kt'), '', 20, 10));
    testElements.push(new Element(50, new ElementName('', null, null, null, 'led 0805 green 3kT'), '', 20, 10));
    testElements.push(new Element(51, new ElementName('', null, null, null, 'led 0805 red 3kT'), '', 20, 10));
    testElements.push(new Element(52, new ElementName('', null, null, null, 'BLM18HG102SN1D / WE 742 792 66 4kT 200mA'), '', 20, 10));
    testElements.push(new Element(53, new ElementName('', null, null, null, 'dławik WE 744 031 101 (100uH 250mA 3816) MOQ 1kT'), '', 20, 10));
    testElements.push(new Element(54, new ElementName('', null, null, null, 'dławik WE 744 053 101 (100uH 450mA) 400szt rolka'), '', 20, 10));
    testElements.push(new Element(55, new ElementName('', null, null, null, 'dławik WE 744 066 101 (100uH 1,2A 2038) SPQ (rolka)800, zam. X 065 x'), '', 20, 10));
    testElements.push(new Element(56, new ElementName('', null, null, null, 'kond.alum. LowZ 22u 50V NACZ220M50V6.3X6.3TR13F 800szt WE 865060643006 3kT'), '', 20, 10));
    testElements.push(new Element(57, new ElementName('', null, null, null, 'kond.alum. 100u/35V LZ EMZA350ADA101MF80G   900T'), '', 20, 10));
    testElements.push(new Element(58, new ElementName('', null, null, null, 'kond.ceram. 0805 33p 50V'), '', 20, 10));
    testElements.push(new Element(59, new ElementName('', null, null, null, 'kond.ceram. 0805 56p 50V'), '', 20, 10));
    testElements.push(new Element(60, new ElementName('', null, null, null, 'kond.ceram. 0805 470p 50V'), '', 20, 10));
    testElements.push(new Element(61, new ElementName('', null, null, null, 'kond.ceram. 0805 1n 50V'), '', 20, 10));
    testElements.push(new Element(62, new ElementName('', null, null, null, 'kond.ceram. 0805 3n3 50V'), '', 20, 10));
    testElements.push(new Element(63, new ElementName('', null, null, null, 'kond.ceram. 0805 10n 50V X7R'), '', 20, 10));
    testElements.push(new Element(64, new ElementName('', null, null, null, 'kond.ceram. 0805 22n 50V X5R'), '', 20, 10));
    testElements.push(new Element(65, new ElementName('', null, null, null, 'kond.ceram. 0805 100n 50V X7R   CL21B104KBCNNNC'), '', 20, 10));
    testElements.push(new Element(66, new ElementName('', null, null, null, 'kond.ceram. 0805 220n 50V X7R  CL21B224KBFNNNG 3kT'), '', 20, 10));
    testElements.push(new Element(67, new ElementName('', null, null, null, 'kond.ceram. 0805 330n X7R'), '', 20, 10));
    testElements.push(new Element(68, new ElementName('', null, null, null, 'kond.ceram. 0805 1u 50V X7R   CL21B105KBFNNNE lub alt, 3k'), '', 20, 10));
    testElements.push(new Element(69, new ElementName('', null, null, null, 'kond.ceram. 1206 4n7 50V 4,7n NPO'), '', 20, 10));
    testElements.push(new Element(70, new ElementName('', null, null, null, 'kond.ceram. 1206 10n 50V X7R'), '', 20, 10));
    testElements.push(new Element(71, new ElementName('', null, null, null, 'kond.ceram. 1206 470n 50V X7R'), '', 20, 10));
    testElements.push(new Element(72, new ElementName('', null, null, null, 'kond.ceram. 1206 10u/25V X5R 2kT CL31A106KAHNNNE'), '', 20, 10));
    testElements.push(new Element(73, new ElementName('', null, null, null, 'kond. ceram. CC1808X102K302T	1808 1n 3kV 2k   1808HC102KAT1A'), '', 20, 10));
    testElements.push(new Element(74, new ElementName('', null, null, null, 'kwarc zegarkowy ABS25-32.768KHZ-6-1T 3kT Epson MC-306-32.768K-E3'), '', 20, 10));
    testElements.push(new Element(75, new ElementName('', null, null, null, 'przełącznik TACTM-67N-F Ninigi MPQ 750 /KAN0641-0701B'), '', 20, 10));
    testElements.push(new Element(76, new ElementName('', null, null, null, 'transoptor LTV-356T-B lub C MFP-4 750rolka=3kT'), '', 20, 10));
    testElements.push(new Element(77, new ElementName('', null, null, null, 'tranzystor BC847B,215 sot23 3kT'), '', 20, 10));
    testElements.push(new Element(78, new ElementName('', null, null, null, 'tranzystor BCP56-16 npn sot223, 1kT'), '', 20, 10));
    testElements.push(new Element(79, new ElementName('', null, null, null, 'tranzystor BSS138 sot23 3kT'), '', 20, 10));
    testElements.push(new Element(80, new ElementName('', null, null, null, 'tranzystor BSS84P sot23 BSS84-7-F 3kT'), '', 20, 10));
    testElements.push(new Element(81, new ElementName('', null, null, null, '74HC107 SO14'), '', 20, 10));
    testElements.push(new Element(82, new ElementName('', null, null, null, '74HCT132D SO14 57T, 2,5kT'), '', 20, 10));
    testElements.push(new Element(83, new ElementName('', null, null, null, '74HCT221 SO16'), '', 20, 10));
    testElements.push(new Element(84, new ElementName('', null, null, null, 'LM317LD13TR (LMX) SO8'), '', 20, 10));
    testElements.push(new Element(85, new ElementName('', null, null, null, 'TLC272CD SO8'), '', 20, 10));
    testElements.push(new Element(86, new ElementName('', null, null, null, 'LM5010AMH MPQ94 / AMHX NOPB 2k5T'), '', 20, 10));
    testElements.push(new Element(87, new ElementName('', null, null, null, 'MCP79400T-I/SN SO8 zegarek'), '', 20, 10));
    testElements.push(new Element(88, new ElementName('', null, null, null, 'ST485EBDR SO8 (15kV) 2k5T'), '', 20, 10));
    testElements.push(new Element(89, new ElementName('', null, null, null, 'TL431IDR SO8 2k5T'), '', 20, 10));
    testElements.push(new Element(90, new ElementName('', null, null, null, 'warystor B72520T140K62 Epcos 1206 WE - 82531140'), '', 20, 10));
    testElements.push(new Element(91, new ElementName('', null, null, null, 'TVS-824021 sot23 MOQ 3kT WE'), '', 20, 10));
    testElements.push(new Element(92, new ElementName('', null, null, null, '7447785002 spq 1000'), '', 20, 10));
    testElements.push(new Element(93, new ElementName('', null, null, null, 'WE-74279221111 1206'), '', 20, 10));
    testElements.push(new Element(94, new ElementName('', null, null, null, 'Wurth 610 016 119 21 1x16 żeńskie smd    MPQ14 WE'), '', 20, 10));
    testElements.push(new Element(95, new ElementName('', null, null, null, 'STM8S207RBT6'), '', 20, 10));
    testElements.push(new Element(96, new ElementName('', null, null, null, 'STM8S105K6T3C 1500op'), '', 20, 10));
    testElements.push(new Element(97, new ElementName('', null, null, null, 'ICE2QR4765G'), '', 20, 10));
    testElements.push(new Element(98, new ElementName('', null, null, null, 'TLP352(TP1,F) Toshiba'), '', 20, 10))
    return testElements;
  }
}
