import { Injectable } from '@angular/core';
import { IStorage } from 'app/shared/interfaces/i-storage';

@Injectable()
export class LocalStorageService implements IStorage {

  constructor() { }

  setItem(key: string, data: Object): Object {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }

  getItem(key: string): Object {
    let data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return null;
  }

  clearAll() {
    localStorage.clear();
  }

  clear(key: string) {
    localStorage.removeItem(key);
  }
}
