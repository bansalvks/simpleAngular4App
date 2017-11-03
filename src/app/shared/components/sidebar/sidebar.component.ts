import { Component, OnInit } from '@angular/core';
import { StorgeFactoryService, STORAGES_TYPES } from 'app/shared/factories/storage-factory/storge-factory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isActive = true;
  storageService;

  constructor(
    private router: Router,
    _storgeFactoryService: StorgeFactoryService
  ) {
    this.storageService = _storgeFactoryService.getStorage(STORAGES_TYPES.LOCAL_STORAGE);
  }

  ngOnInit() {
  }

  signout() {
    this.router.navigate(['/login']);    
    this.storageService.clearAll();
  }
}
