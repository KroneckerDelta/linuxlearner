import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LinuxCommandResultService {

    private resultContent: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }

    public getResultAsObservable(): Observable<string> {
        return this.resultContent.asObservable();
    }

    public setResultContent(line: string): void {
        console.log('Setze Result mit: ', line);
        this.resultContent.next(line);
    }

    public getResultValue(): string {
        return this.resultContent.getValue();
    }

}