import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,

        MatTooltipModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class LayoutModule { }
