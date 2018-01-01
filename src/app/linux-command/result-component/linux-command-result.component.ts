import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LinuxCommandResultService } from '../service/linux-command-result.service';

@Component({
    selector: 'linux-command-result',
    styleUrls: ['./linux-command-result.component.css'],
    templateUrl: './linux-command-result.component.html'
})
export class LinuxCommandResultComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandResultComponent';
    private result: string = '';
    private subscription: Subscription;
    constructor(private linuxCommandSourceService: LinuxCommandResultService) {
        this.subscription = linuxCommandSourceService.getResultAsObservable().subscribe((value) => {
            this.result = value;
        });
    }

    public ngOnInit() {
    }

    public ngOnDestroy() {
    }
}
