import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class LinuxCommandLineService {

    private currentCommandLine: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }

    public getCurrentCommandLine(): Observable<string> {
        return this.currentCommandLine.asObservable();
    }

    public setCurrentCommandLine(line: string): void {
        this.currentCommandLine.next(line);
    }

    public getCurrenCommandLineValue(): string {
        return this.currentCommandLine.getValue();
    }

}
