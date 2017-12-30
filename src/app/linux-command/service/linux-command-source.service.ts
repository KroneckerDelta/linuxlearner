import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LinuxCommandSourceService {

    private currentSourceContent: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }

    public getCurrentSourceContent(): Observable<string> {
        return this.currentSourceContent.asObservable();
    }

    public setCurrentSourceContent(line: string): void {
        this.currentSourceContent.next(line);
    }

    public getSourceValue(): string {
        return this.currentSourceContent.getValue();
    }

}