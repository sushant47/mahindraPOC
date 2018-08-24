import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }

    public post(url: string, reqObj) {
       return this.http.post(url, reqObj);

    }

    public get(url: string) {
        return this.http.get(url);
     }
}
