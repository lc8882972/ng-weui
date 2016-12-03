import { Component, OnInit, ContentChildren } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
    moduleId: module.id,
    selector: 'tab-head',
    template: `
        <div class="tab-head" (clickme)="clickme($event)" >
            <ng-content></ng-content>
        </div>
    `
    , styles: [
        `
        .tab-head {
	        display: flex;
	        height: 1.333rem;
	        width: 100%;
	        font-size: 32px;
        }

        .tab-item {
	        flex: 1;
	        text-align: center;
	        height: 100%;
	        line-height: 1.333rem;
        }
        `
    ]
})
export class TabHeadComponent implements OnInit {
    @ContentChildren(ItemComponent) items: ItemComponent[];
    constructor() { }

    ngOnInit() { }

    ngAfterContentInit() {
        // contentChild is set
        // containerChild is set
        console.log(this.items);
    }

    clickme(child : ItemComponent){
        for(var i =0 ;i <this.items.length;i++){
            if(this.items[i] == child){
                console.log(i);
            }
        }
    }
}