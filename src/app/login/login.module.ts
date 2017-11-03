import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';

import { PersonService } from 'app/shared/services/api-services/person/person.service';
import { NotificationService } from 'app/shared/services/helper-services/notificaiton/notification.service';
import { CustomeValidatorsService } from 'app/shared/services/helper-services/custom-validators/custome-validators.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        
        MatSnackBarModule        
    ],
    declarations: [LoginComponent],
    providers:[
        PersonService,
        NotificationService,
        CustomeValidatorsService
    ]
})
export class LoginModule {
}
