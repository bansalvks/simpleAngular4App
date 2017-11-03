import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { registrationRoutingModule } from './registration.routing';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PersonService } from 'app/shared/services/api-services/person/person.service'
import { NotificationService } from 'app/shared/services/helper-services/notificaiton/notification.service'
import { CustomeValidatorsService } from 'app/shared/services/helper-services/custom-validators/custome-validators.service';

import {
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        registrationRoutingModule,
        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        MatSnackBarModule
    ],
    declarations: [
        RegistrationComponent
    ],
    providers: [
        PersonService,
        NotificationService,
        CustomeValidatorsService
    ]
})
export class RegistrationModule {
}
