import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import { VersionService } from '../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [VersionService]
})

export class HeaderComponent implements OnInit {
  @Output() loggedOff = new EventEmitter<boolean>();

  constructor(private versionService: VersionService) {}

  ngOnInit() {
    this.versionService.setVersion('v0.06');
    this.versionService.setVersionDate('2017-11-05');
  }

  onLogOff() {
    this.loggedOff.emit(false);
  }

  getVersionService() {
    return this.versionService;
  }
}
