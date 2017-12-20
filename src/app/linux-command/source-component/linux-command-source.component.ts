import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'linux-command-source',
    styleUrls: ['./linux-command-source.component.css'],
    templateUrl: './linux-command-source.component.html'
})
export class LinuxCommandSourceComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandSourceComponent';

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }
}
