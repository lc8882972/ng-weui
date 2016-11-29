import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tab-head',
    template:`
        <div class="tab-head">
            <ng-content></ng-content>
        </div>
    `
    ,styles:[
        `
        .tab-head {
	        display: flex;
	        height: 1.333rem;
	        width: 100%;
	        font-size: 32px;
        }
        `
    ]
})
export class TabHeadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}