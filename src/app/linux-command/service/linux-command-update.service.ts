import { Injectable } from '@angular/core';
import { LinuxCommand } from 'app/linux-command/model/models';
import {
    LinuxCommandLineService,
    LinuxCommandResultService,
    LinuxCommandService,
    LinuxCommandSourceService,
} from 'app/linux-command/service';
import { BehaviorSubject, Observable } from 'rxjs';

import { LinuxCommandAPI } from '../model/models';

@Injectable()
export class LinuxCommandUpdateService {

    // private allCommand: LinuxCommand[] = [];

    private receivedData: BehaviorSubject<LinuxCommand[]> = new BehaviorSubject([]);

    constructor(
        private linuxCommandService: LinuxCommandService,
        private linuxCommandResultService: LinuxCommandResultService,
        private linuxCommandSourceService: LinuxCommandSourceService,
        private linuxCommandLineService: LinuxCommandLineService) { }

    public getSourceAsObservable(): Observable<LinuxCommand[]> {
        return this.receivedData.asObservable();
    }

    public setSourceContent(line: LinuxCommand[]): void {
        this.receivedData.next(line);
    }

    public getSourceValue(): LinuxCommand[] {
        return this.receivedData.getValue();
    }

    public addCommand(lc: LinuxCommand) {
        this.getSourceValue().push(lc);
        this.update();
    }

    public deleteCommand(lc: LinuxCommand) {
        this.setSourceContent(this.getSourceValue().filter((item) => item !== lc));
        this.update();
    }

    /**
     * communicate with backend
     */
    public update() {

        let postit = this.convertListToPostable();
        console.log('postit', postit);
        if (postit) {
            this.linuxCommandService.postData(postit).subscribe((result) => {
                this.linuxCommandResultService.setResultContent(result.text());
            });
            this.createCommandLineString();
        } else {
            let x = this.linuxCommandSourceService.getSourceValue();
            console.log('solte hier rein gehen!!', x, 'aha');
            this.linuxCommandResultService
                .setResultContent(this.linuxCommandSourceService.getSourceValue());
        }
    }


    private createCommandLineString() {

        let actual: LinuxCommand = null;
        let result: string = '';
        this.getSourceValue().forEach((val) => {
            // mal in Ruhe über die IF Cascade nachdenken, wenn es nicht so spät ist...
            if (actual === null) {
                actual = val;
                result += val.command;
                if (val.currentOption && val.currentOption !== 'none') {
                    result += ' --' + val.currentOption;
                }
                if (val.pattern) {
                    result += ' ';
                    result += val.pattern;
                }
                result += ' <<FILENAME>>';
            } else if (actual.command === val.command) {
                if (val.currentOption && val.currentOption !== 'none') {
                    result += ' --' + val.currentOption;
                }
            } else if (actual.command !== val.command) {
                actual = val;
                result += ' | ';
                result += val.command;
                if (val.currentOption && val.currentOption !== 'none') {
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

    private convertListToPostable(): string {
        let result: LinuxCommandAPI = null;

        this.getSourceValue().forEach((item, index) => {
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
        if (result) {
            return JSON.stringify(result);
        } else {
            return '';
        }

        // return JSON.stringify(
        //     {
        //         command: 'wc',
        //         source: 'Dieser Text wird gegrept, wirklich!',
        //         schalter: 'words',
        //         pipe: null

        //     });
    }
}
