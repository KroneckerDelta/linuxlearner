import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions } from 'app/linux-command/enums/enums';
import { LinuxCommand } from 'app/linux-command/model/models';

import { WcOptions } from '../enums/enums';

@Component({
    selector: 'linux-command-line',
    styleUrls: ['./linux-command-line.component.css'],
    templateUrl: './linux-command-line.component.html'
})
export class LinuxCommandLineComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandLineComponent';
    private prompt: string = 'root$ ';
    private command: string = this.prompt + 'ls -la';

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }
}
