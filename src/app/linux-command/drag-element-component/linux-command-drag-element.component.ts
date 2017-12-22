import { Component, OnDestroy, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'linux-command-drag-element',
    styleUrls: ['./linux-command-drag-element.component.scss'],
    templateUrl: './linux-command-drag-element.component.html'
})
export class LinuxCommandDragElementComponent implements OnInit, OnDestroy {

    @Input('value') public value: string;
    private name: string = 'LinuxCommandDragElementComponent';

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }

    public ngOnChanges() { }

}


