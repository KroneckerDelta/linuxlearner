import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions } from 'app/linux-command/enums/enums';
import { LinuxCommand } from 'app/linux-command/model/models';

@Component({
    selector: 'linux-command-drop',
    styleUrls: ['./linux-command-drop.component.css'],
    templateUrl: './linux-command-drop.component.html'
})
export class LinuxCommandDropComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDropComponent';

    receivedData: Array<LinuxCommand> = [];

    transferDataSuccess($event: any) {
        let x = $event.dragData;
        console.log('Drop', $event);
        let keys = Object.keys(GrepOptions);
        let grepOptionsAsString = keys.slice(keys.length / 2)
        let xx: LinuxCommand = new LinuxCommand('grep', grepOptionsAsString);
        console.log('xx', xx);
        this.receivedData.push(xx);
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
        console.log('drop me now', dragData);
        return dragData > this.val;
    }

    public getCommands(): string[] {
        console.log('hier geht keiner rein!!!');
        return this.receivedData.map(x => x.command);
    }

}
