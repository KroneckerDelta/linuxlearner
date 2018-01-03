import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions } from 'app/linux-command/enums/enums';
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
}
