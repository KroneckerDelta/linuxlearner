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
    simpleDrop: any = null;

    myCommand: Object = { id: 1, msg: 'grep' };

    constructor() { }


    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
        this.enumToArray();
    }


    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }

    private enumToArray(): void {
        let keys = Object.keys(Commands);
        this.commands = keys.slice(keys.length / 2);
    }

}
