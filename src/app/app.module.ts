import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthGuard, LoginGaurd } from './shared';
import { AppRoutingModule } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalDataService } from 'app/shared/services/helper-services/global-data/global-data.service';
import { StorgeFactoryService } from 'app/shared/factories/storage-factory/storge-factory.service';
import { LocalStorageService } from 'app/shared/services/helper-services/storage/local-storage.service';
import { RequestFactoryService } from 'app/shared/factories/request-factory/request-factory.service';
import { RequestService } from 'app/shared/services/helper-services/request/request.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptorService } from 'app/shared/interceptors/request-interceptor/request-interceptor.service';
import { ResponseInterceptorService } from 'app/shared/interceptors/response-interceptor/response-interceptor.service';
import { MatSnackBarModule, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { GlobalFunctionService } from 'app/shared/services/helper-services/global-function/global-function.service';
import { InputModalComponent } from 'app/shared/components/input-modal/input-modal.component';
import { PersonService } from 'app/shared/services/api-services/person/person.service';

@NgModule({
  declarations: [
    AppComponent,
    InputModalComponent
  ],
  entryComponents:[InputModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    // MATERIAL LIBRARY
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    // GUARDS
    AuthGuard,
    LoginGaurd,

    GlobalDataService,
    GlobalFunctionService,

    StorgeFactoryService,
    LocalStorageService,

    RequestFactoryService,
    RequestService,
    
    PersonService,
    
    // INTERCEPROTS
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
    RequestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
