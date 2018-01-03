import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class LinuxCommandService {
    public jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    private url2: string = 'http://localhost:8888/api/command/';
    private url: string = '/api/command/';
    private url3: string = 'https://linuxlearner.herokuapp.com/api/command/';

    constructor(private http: Http) { }


    public postData(object: string) {
        console.log('REST: ', object);
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