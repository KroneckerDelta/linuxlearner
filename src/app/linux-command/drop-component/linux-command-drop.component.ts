import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions } from 'app/linux-command/enums/enums';
import { LinuxCommand } from 'app/linux-command/model/models';

import { WcOptions } from '../enums/enums';

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
        this.receivedData.push(this.dispatchCommand(x));
    }

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }

    private dispatchCommand(command: string): LinuxCommand {

        switch (command) {
            case 'grep':
                let gkeys = Object.keys(GrepOptions);
                let grepOptionsAsString = gkeys.slice(gkeys.length / 2)
                return new LinuxCommand('grep', grepOptionsAsString);
            case 'wc':
                let wckeys = Object.keys(WcOptions);
                let wcOptionsAsString = wckeys.slice(wckeys.length / 2)
                return new LinuxCommand('wc', wcOptionsAsString);
            case 'sed':
                let sedkeys = Object.keys(WcOptions);
                let sedOptionsAsString = sedkeys.slice(sedkeys.length / 2)
                return new LinuxCommand('not Implemented', wcOptionsAsString);

            default:
                let def = Object.keys(WcOptions);
                let defaultOptionsAsString = wckeys.slice(def.length / 2)
                return new LinuxCommand('not Implemented', defaultOptionsAsString);
        }
    }

    public onOptionChange(lc: LinuxCommand, o: string) {
        console.log('ChangedOption: ', lc, ' mit ', lc.currentOption);

    }
}
