import { Component, OnDestroy, OnInit } from '@angular/core';

import { Commands } from '../enums/enums';

@Component({
    selector: 'linux-command-drag',
    styleUrls: ['./linux-command-drag.component.css'],
    templateUrl: './linux-command-drag.component.html'
})
export class LinuxCommandDragComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDragComponent';
    private commands: string[];

    constructor() { }


    public ngOnInit() {
        this.enumToArray();
    }


    public ngOnDestroy() {
    }

    private enumToArray(): void {
        let keys = Object.keys(Commands);
        this.commands = keys.slice(keys.length / 2);
    }

}
