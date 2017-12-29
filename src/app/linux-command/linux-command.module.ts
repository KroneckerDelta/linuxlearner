import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DndModule } from 'ng2-dnd';

import { LinuxCommandLineComponent } from './command-line-component/linux-command-line.component';
import { LinuxCommandDragComponent } from './drag-component/linux-command-drag.component';
import { LinuxCommandDragElementComponent } from './drag-element-component/linux-command-drag-element.component';
import { LinuxCommandDropComponent } from './drop-component/linux-command-drop.component';
import { LinuxCommandComponent } from './linux-command.component';
import { LinuxCommandRoutesModule } from './linux-command.routes.module';
import { LinuxCommandResultComponent } from './result-component/linux-command-result.component';
import { LinuxCommandService } from './service/linux-command-service';
import { LinuxCommandSourceComponent } from './source-component/linux-command-source.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LinuxCommandRoutesModule,
        HttpModule,
        DndModule.forRoot()
    ],
    declarations: [
        LinuxCommandComponent,
        LinuxCommandDragComponent,
        LinuxCommandDropComponent,
        LinuxCommandResultComponent,
        LinuxCommandSourceComponent,
        LinuxCommandDragElementComponent,
        LinuxCommandLineComponent

    ],
    providers: [LinuxCommandService],
    exports: [
        LinuxCommandDragElementComponent
    ]
})
export class LinuxCommandModule { }
