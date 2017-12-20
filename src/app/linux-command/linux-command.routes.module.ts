import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinuxCommandComponent } from './linux-command.component';

const moduleRoutes: Routes = [
    { path: 'linux-command', component: LinuxCommandComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(moduleRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LinuxCommandRoutesModule {

    private name: string = 'LinuxCommandRoutesModule';

    constructor() { }
}

