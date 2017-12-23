import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'linux-command-drop',
    styleUrls: ['./linux-command-drop.component.css'],
    templateUrl: './linux-command-drop.component.html'
})
export class LinuxCommandDropComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandDropComponent';
    
    restrictedDrop1: any = null;
    restrictedDrop2: any = null;
    simpleDrop: any = null;

    constructor() { }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }

    val = 500;
    isDropAllowed = (dragData: any) => {
        console.log('drop');
        return dragData > this.val;
    }
}
