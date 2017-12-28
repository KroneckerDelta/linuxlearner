import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions } from 'app/linux-command/enums/enums';
import { LinuxCommand } from 'app/linux-command/model/models';
import { LinuxCommandService } from 'app/linux-command/service/linux-command-service';

import { WcOptions } from '../enums/enums';

@Component({
    selector: 'linux-command-drop',
    styleUrls: ['./linux-command-drop.component.css'],
    templateUrl: './linux-command-drop.component.html'
})
export class LinuxCommandDropComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDropComponent';
    private receivedData: Array<LinuxCommand> = [];

    constructor(private linuxCommandService: LinuxCommandService) { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }

    public transferDataSuccess($event: any) {
        let x = $event.dragData;
        this.receivedData.push(this.dispatchCommand(x));
    }

    public onOptionChange(lc: LinuxCommand, o: string) {
        console.log('ChangedOption: ', lc, ' mit ', lc.currentOption);
        let xSome = this.linuxCommandService.postData(this.convertListToPostable());
        console.log('was ist der Post??', xSome);

    }

    private dispatchCommand(command: string): LinuxCommand {

        switch (command) {
            case 'grep':
                const gkeys = Object.keys(GrepOptions);
                const grepOptionsAsString = gkeys.slice(gkeys.length / 2);
                return new LinuxCommand('grep', grepOptionsAsString);
            case 'wc':
                const wckeys = Object.keys(WcOptions);
                const wcOptionsAsString = wckeys.slice(wckeys.length / 2);
                return new LinuxCommand('wc', wcOptionsAsString);
            case 'sed':
                const sedkeys = Object.keys(WcOptions);
                const sedOptionsAsString = sedkeys.slice(sedkeys.length / 2);
                return new LinuxCommand('not Implemented', wcOptionsAsString);

            default:
                const def = Object.keys(WcOptions);
                const defaultOptionsAsString = wckeys.slice(def.length / 2);
                return new LinuxCommand('not Implemented', defaultOptionsAsString);
        }
    }

    private convertListToPostable(): string {
        return JSON.stringify(
            {
                command: 'wc',
                source: 'Dieser Text wird gegrept',
                schalter: 'words',
                pipe: 'null'

            });
    }
}
