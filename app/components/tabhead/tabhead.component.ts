import { Component, OnInit, ContentChildren, ElementRef, ViewContainerRef, ViewChildren } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
    moduleId: module.id,
    selector: 'tab-head',
    template: `
        <div class="tab-head"  >
        <tab-item class="tab-head-item" (clickme)="clickme(e)">
            tab1
        </tab-item>
        <tab-item class="tab-head-item" (clickme)="clickme(e)">
            tab2
        </tab-item>
        <tab-item class="tab-head-item" (clickme)="clickme(e)">
           tab3
        </tab-item>
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
    @ViewChildren(ItemComponent) items: ItemComponent[];
    constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef) {

    }

    ngOnInit() { }

    ngAfterContentInit() {
        // contentChild is set
        // containerChild is set
        console.log(this.items);
    }

    ngAfterViewInit() {
        // contentChild is set
        // containerChild is set
        console.log(this.items);
    }
    clickme(e: ItemComponent) {
        console.log(e);
    }
}