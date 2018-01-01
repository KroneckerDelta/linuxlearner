import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LinuxCommand } from 'app/linux-command/model/models';


@Component({
    selector: 'linux-command-drag-element',
    styleUrls: ['./linux-command-drag-element.component.scss'],
    templateUrl: './linux-command-drag-element.component.html'
})
export class LinuxCommandDragElementComponent implements OnInit, OnDestroy, OnChanges {

    @Input('value') public value: LinuxCommand;
    private name: string = 'LinuxCommandDragElementComponent';

    constructor() { }

    public ngOnInit() {
    }

    public ngOnDestroy() {
    }

    public ngOnChanges() {
    }

}
