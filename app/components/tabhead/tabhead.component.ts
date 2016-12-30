import { Component, OnInit, ContentChildren, ElementRef, ViewContainerRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
    moduleId: module.id,
    selector: 'tab-head',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="tab-head" (clickme)="clickme($event)">
            <ng-content></ng-content>
        </div>
        <div class="g">
            <span class="pspan" style="transform: translate3d(0);"></span>
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

        .tab-head > item{
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