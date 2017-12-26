import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'linux-command-drop',
    styleUrls: ['./linux-command-drop.component.css'],
    templateUrl: './linux-command-drop.component.html'
})
export class LinuxCommandDropComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDropComponent';

    receivedData: Array<String> = [];

    transferDataSuccess($event: any) {
        console.log('Drop', $event);
        this.receivedData.push($event);
    }

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }

    val = 500;
    isDropAllowed = (dragData: any) => {
        console.log('drop', dragData);
        return dragData > this.val;
    }
}
