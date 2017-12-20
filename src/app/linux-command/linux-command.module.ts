import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LinuxCommandDragComponent } from './drag-component/linux-command-drag.component';
import { LinuxCommandComponent } from './linux-command.component';
import { LinuxCommandRoutesModule } from './linux-command.routes.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LinuxCommandRoutesModule
    ],
    declarations: [
        LinuxCommandComponent,
        LinuxCommandDragComponent
    ],
    providers: []
})
export class LinuxCommandModule { }
