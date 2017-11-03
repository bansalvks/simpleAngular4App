import { Injectable } from '@angular/core';
import { IStorage } from 'app/shared/interfaces/i-storage';
import { LocalStorageService } from 'app/shared/services/helper-services/storage/local-storage.service';

@Injectable()
export class StorgeFactoryService {

  constructor(private _localStorageService: LocalStorageService) { }

  getStorage(storageType: STORAGES_TYPES): IStorage {
    switch (storageType) {
      case STORAGES_TYPES.LOCAL_STORAGE:
        return this._localStorageService;
      default:
        return null;
    }
  }
}

export enum STORAGES_TYPES {
  LOCAL_STORAGE
}