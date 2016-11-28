import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../servicers/user.service';

@Component({
    moduleId: module.id,
    selector: 'cloud-a',
    templateUrl: 'a.component.html',
    providers: [UserService]
})
export class AComponent implements OnInit {
    list: Array<Per>;
    constructor(private router: Router, private user: UserService) {
        this.list=[
            {name:'yan',email:'410115424@qq.com' }
        ];
    }

    ngOnInit() { }

    btnClick() {
        this.router.navigateByUrl('/b');
    }
}

class Per {
    name: string;
    email: string;
}