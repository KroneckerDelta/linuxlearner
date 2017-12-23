import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DndModule } from 'ng2-dnd';

import { LinuxCommandDragComponent } from './drag-component/linux-command-drag.component';
import { LinuxCommandDragElementComponent } from './drag-element-component/linux-command-drag-element.component';
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
        DndModule.forRoot()
    ],
    declarations: [
        LinuxCommandComponent,
        LinuxCommandDragComponent,
        LinuxCommandDropComponent,
        LinuxCommandResultComponent,
        LinuxCommandSourceComponent,
        LinuxCommandDragElementComponent
    ],
    providers: [],
    exports: [
        LinuxCommandDragElementComponent
    ]
})
export class LinuxCommandModule { }
