import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LinuxCommandSourceService {

    private sourceContent: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }

    public getSourceAsObservable(): Observable<string> {
        return this.sourceContent.asObservable();
    }

    public setSourceContent(line: string): void {
        this.sourceContent.next(line);
    }

    public getSourceValue(): string {
        return this.sourceContent.getValue();
    }

}