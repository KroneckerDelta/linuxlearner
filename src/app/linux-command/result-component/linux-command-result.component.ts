import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'linux-command-result',
    styleUrls: ['./linux-command-result.component.css'],
    templateUrl: './linux-command-result.component.html'
})
export class LinuxCommandResultComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandResultComponent';

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }
}
