import { Component, OnDestroy, OnInit } from '@angular/core';
import { LinuxCommandLineService } from 'app/linux-command/service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'linux-command-line',
    styleUrls: ['./linux-command-line.component.css'],
    templateUrl: './linux-command-line.component.html'
})
export class LinuxCommandLineComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandLineComponent';
    private subscription: Subscription;
    private prompt: string = 'root$ ';
    private commandLine: string = '';

    constructor(
        private linuxCommandLineService: LinuxCommandLineService
    ) {
        this.subscription = linuxCommandLineService.getCurrentCommandLine().subscribe((value) => {
            this.commandLine = this.prompt + ' ' + value;
        });

    }

    public ngOnInit() {
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
