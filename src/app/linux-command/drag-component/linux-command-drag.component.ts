import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'linux-command-drag',
    styleUrls: ['./linux-command-drag.component.css'],
    templateUrl: './linux-command-drag.component.html'
})
export class LinuxCommandDragComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDragComponent';

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }
}
