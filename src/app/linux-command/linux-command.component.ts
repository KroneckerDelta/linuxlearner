import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'linux-command',
  styleUrls: ['./linux-command.component.css'],
  templateUrl: './linux-command.component.html'
})
export class LinuxCommandComponent implements OnInit, OnDestroy {

  private name: string = 'LinuxCommandComponent';

  constructor() { }

  public ngOnInit() {
  }

  public ngOnDestroy() {
  }

}
