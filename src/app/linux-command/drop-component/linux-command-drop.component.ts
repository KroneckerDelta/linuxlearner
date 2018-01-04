import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions, SedOptions, SortOptions } from 'app/linux-command/enums/enums';
import { LinuxCommand } from 'app/linux-command/model/models';
import { LinuxCommandUpdateService } from 'app/linux-command/service';
import { Subscription } from 'rxjs';

import { WcOptions } from '../enums/enums';

@Component({
    selector: 'linux-command-drop',
    styleUrls: ['./linux-command-drop.component.css'],
    templateUrl: './linux-command-drop.component.html'
})
export class LinuxCommandDropComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDropComponent';
    private receivedData: LinuxCommand[] = [];
    private subscription: Subscription;


    constructor(
        private linuxCommandUpdateService: LinuxCommandUpdateService
    ) {
        this.subscription = this.linuxCommandUpdateService.getSourceAsObservable().subscribe((val) => {
            this.receivedData = val;
        });

    }

    public ngOnInit() {
        this.update();
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public transferDataSuccess($event: any) {
        let x = $event.dragData;
        this.linuxCommandUpdateService.addCommand(this.dispatchCommand(x));

    }

    public update() {
        this.linuxCommandUpdateService.update();
    }


    public deleteItem(command2Remove: LinuxCommand) {
        this.linuxCommandUpdateService.deleteCommand(command2Remove);

    }

    private dispatchCommand(command: string): LinuxCommand {
        let options: string[] = [];
        switch (command) {
            case 'grep':
                options = this.extractOptions(GrepOptions);
                break;
            case 'wc':
                options = this.extractOptions(WcOptions);
                break;
            case 'sed':
                options = this.extractOptions(SedOptions);
                break;
            case 'sort':
                options = this.extractOptions(SortOptions);
                break;
            default:
                options = this.extractOptions(WcOptions);
        }
        const result: LinuxCommand = new LinuxCommand(command, options);
        return result;
    }
    private extractOptions(options: any): string[] {
        const keys = Object.keys(options);
        const keyAsString = keys.slice(keys.length / 2);
        return keyAsString;
    }
}
