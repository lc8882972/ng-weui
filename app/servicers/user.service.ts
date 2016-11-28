import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    get() :Observable<UserModel> {
       return this.http.get('').map(res=> res.json());
    }
}

export class UserModel{
    Id:number;
    Name:string;
    Email:string;
    Phone:string;
}