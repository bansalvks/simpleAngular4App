import { Injectable } from '@angular/core';
import { StorgeFactoryService, STORAGES_TYPES } from 'app/shared/factories/storage-factory/storge-factory.service';
import { IStorage } from 'app/shared/interfaces/i-storage';

@Injectable()
export class GlobalDataService {

  private keys = {
    userInfoKey: 'userInformation'
  }

  private storageService: IStorage;

  constructor(
    _storgeFactoryService: StorgeFactoryService
  ) {
    this.storageService = _storgeFactoryService.getStorage(STORAGES_TYPES.LOCAL_STORAGE);
  }

  private getSet(key, data): Object {
    if (data)
      this.storageService.setItem(key, data);
    return this.storageService.getItem(key);
  }

  public userInfo(data : Object = null): Object {
    return this.getSet(this.keys.userInfoKey, data);
  }

}
