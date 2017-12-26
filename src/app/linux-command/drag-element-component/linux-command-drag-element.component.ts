import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'linux-command-drag-element',
    styleUrls: ['./linux-command-drag-element.component.scss'],
    templateUrl: './linux-command-drag-element.component.html'
})
export class LinuxCommandDragElementComponent implements OnInit, OnDestroy {

    @Input('value') public value: string;
    private name: string = 'LinuxCommandDragElementComponent';

    private myValue: Object = { id: 1, msg: 'bla', blub: 'blub' };

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }

    public ngOnChanges() {
        console.log('dragge');
    }

}


