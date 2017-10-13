import { Injectable } from '@angular/core';

@Injectable()
export class VersionService {
  private version: string;
  private versionDate: string;

  setVersion(version: string) {
    this.version = version;
  }

  setVersionDate(versionDate: string) {
    this.versionDate = versionDate;
  }

  getVersion() {
    return  this.version;
  }

  getVersionDate() {
    return this.versionDate;
  }
}
