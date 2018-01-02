import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions } from 'app/linux-command/enums/enums';
import { LinuxCommand } from 'app/linux-command/model/models';
import { LinuxCommandLineService, LinuxCommandService } from 'app/linux-command/service';
import { LinuxCommandResultService } from 'app/linux-command/service/linux-command-result.service';

import { WcOptions } from '../enums/enums';
import { LinuxCommandAPI } from '../model/models';
import { LinuxCommandSourceService } from '../service/linux-command-source.service';

@Component({
    selector: 'linux-command-drop',
    styleUrls: ['./linux-command-drop.component.css'],
    templateUrl: './linux-command-drop.component.html'
})
export class LinuxCommandDropComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDropComponent';
    private receivedData: LinuxCommand[] = [];

    constructor(
        private linuxCommandService: LinuxCommandService,
        private linuxCommandLineService: LinuxCommandLineService,
        private linuxCommandSourceService: LinuxCommandSourceService,
        private linuxCommandResultService: LinuxCommandResultService
    ) { }

    public ngOnInit() {
    }

    public ngOnDestroy() {
    }

    public transferDataSuccess($event: any) {
        let x = $event.dragData;
        this.receivedData.push(this.dispatchCommand(x));
        this.createCommandLineString();
    }

    public onOptionChange(lc: LinuxCommand) {
        this.linuxCommandService.postData(this.convertListToPostable()).subscribe((result) => {

            this.linuxCommandResultService.setResultContent(result.text());
        });

        this.createCommandLineString();

    }


    public deleteItem(command2Remove: LinuxCommand) {
        this.receivedData = this.receivedData.filter((item) => item !== command2Remove);
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
                return new LinuxCommand('wc', wcOptionsAsString, null);
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
        let result: LinuxCommandAPI = null;

        this.receivedData.forEach((item, index) => {
            console.log('Item: ', item);
            console.log('index: ', index);
            let lc = new LinuxCommandAPI(item);
            if (index === 0) {
                result = lc;
                result.source = this.linuxCommandSourceService.getSourceValue();
            } else {
                result.pipe = lc;
            }
        });
        console.log('fertiges Command: ', result);

        return JSON.stringify(result);

        // return JSON.stringify(
        //     {
        //         command: 'wc',
        //         source: 'Dieser Text wird gegrept, wirklich!',
        //         schalter: 'words',
        //         pipe: null

        //     });
    }
    private createCommandLineString() {

        let actual: LinuxCommand = null;
        let result: string = '';
        this.receivedData.forEach((val) => {
            // mal in Ruhe über die IF Cascade nachdenken, wenn es nicht so spät ist...
            if (actual === null) {
                actual = val;
                result += val.command;
                if (val.currentOption) {
                    result += ' --' + val.currentOption;
                }
                if (val.pattern) {
                    result += ' ';
                    result += val.pattern;
                }
                result += ' <<FILENAME>>';
            } else if (actual.command === val.command) {
                if (val.currentOption) {
                    result += ' --' + val.currentOption;
                }
            } else if (actual.command !== val.command) {
                actual = val;
                result += ' | ';
                result += val.command;
                if (val.currentOption) {
                    result += ' --' + val.currentOption;
                }
                if (val.pattern) {
                    result += ' ';
                    result += val.pattern;
                }
            }
        });

        this.linuxCommandLineService.setCurrentCommandLine(result);
    }
}
