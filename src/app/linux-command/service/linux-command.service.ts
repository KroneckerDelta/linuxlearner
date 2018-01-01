import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class LinuxCommandService {
    public jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    private url: string = 'https://linuxlearner.herokuapp.com/api/command/';

    constructor(private http: Http) { }


    public postData(object: string) {
        return this.http
            .post(this.url,
            object,
            {
                headers: this.jsonHeaders,
            });

    }
    private handleError(error: Response): Promise<any> {
        return Promise.reject(error);
    }
}