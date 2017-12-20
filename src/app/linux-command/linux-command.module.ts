import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgDragDropModule } from 'ng-drag-drop';

import { LinuxCommandDragComponent } from './drag-component/linux-command-drag.component';
import { LinuxCommandDropComponent } from './drop-component/linux-command-drop.component';
import { LinuxCommandComponent } from './linux-command.component';
import { LinuxCommandRoutesModule } from './linux-command.routes.module';
import { LinuxCommandResultComponent } from './result-component/linux-command-result.component';
import { LinuxCommandSourceComponent } from './source-component/linux-command-source.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LinuxCommandRoutesModule,
        NgDragDropModule.forRoot()
    ],
    declarations: [
        LinuxCommandComponent,
        LinuxCommandDragComponent,
        LinuxCommandDropComponent,
        LinuxCommandResultComponent,
        LinuxCommandSourceComponent
    ],
    providers: []
})
export class LinuxCommandModule { }
