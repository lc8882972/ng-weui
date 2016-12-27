import { Component, OnInit, HostBinding, trigger, transition, animate, state, style,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    encapsulation: ViewEncapsulation.None,
    selector:'view',
    templateUrl: 'a.component.html',
    styleUrls: ['a.component.css'],
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    transform: 'translate3d(0,0,0)'
                })
            ),
            transition(':enter', [
                style({
                    transform: 'translate3d(-100%,0,0)'
                }),
                animate('0.5s linear')
            ]),
            transition(':leave', [
                animate('0.5s linear', style({
                    transform: 'translate3d(100%,0,0)'
                }))
            ])
        ])
    ]
})
export class AComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    list: Array<Per>;
    constructor(private router: Router) {
        this.list = [
            { name: 'yan', email: '410115424@qq.com' }
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