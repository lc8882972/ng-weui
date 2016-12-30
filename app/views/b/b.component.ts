import { Component, OnInit, HostBinding, trigger, transition, animate, keyframes, state, style,ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    encapsulation: ViewEncapsulation.None,
    selector: 'view',
    templateUrl: 'b.component.html',
    styleUrls: ['b.component.css'],
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
export class BComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    state: Boolean = true;
    constructor() { }

    ngOnInit() { }

    change(){
        console.log('tab change');
    }

}