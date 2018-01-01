import { Component, OnDestroy, OnInit } from '@angular/core';

import { LinuxCommandResultService } from '../service/linux-command-result.service';

@Component({
    selector: 'linux-command-source',
    styleUrls: ['./linux-command-source.component.css'],
    templateUrl: './linux-command-source.component.html'
})
export class LinuxCommandSourceComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandSourceComponent';
    private source: string = '';
    constructor(private linuxResultService: LinuxCommandResultService) {
        this.source = this.sampledata();
    }

    public ngOnInit() {
    }

    public ngOnDestroy() {

    }

    private sampledata(): string {
        return "This is an example! Change it! " +
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna" +
            "aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren," +
            "no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" +
            "diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam" +
            "et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";


    }
}
