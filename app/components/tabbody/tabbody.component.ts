import { Component, OnInit, ContentChildren, AfterContentInit } from '@angular/core';

import { ItemComponent } from '../tab.item/item.component';
@Component({
	moduleId: module.id,
	selector: 'tab-body',
	template: `
    <div class="tab-content" style="transform: translateX(0);">
        <ng-content></ng-content>
    </div>
    `,
	styles: [
		`.tab-content {
	        z-index: 0;
	        display: -webkit-box;
	        display: -moz-box;
	        display: -ms-flexbox;
	        display: -webkit-flex;
	        display: flex;
	        position: relative;
	        width: 100%;
	        height: 100%;
	        -webkit-transition-property: -webkit-transform;
	        -moz-transition-property: -moz-transform;
	        -o-transition-property: -o-transform;
	        -ms-transition-property: -ms-transform;
	        transition-property: transform;
	        -webkit-box-sizing: content-box;
	        -moz-box-sizing: content-box;
	        box-sizing: content-box;
} `
	]
})
export class TabBodyComponent implements OnInit, AfterContentInit {
	@ContentChildren(ItemComponent) items:  ItemComponent[] ;
	constructor() { }

	ngOnInit() {

	}

	ngAfterContentInit() {
		// contentChild is set
		// containerChild is set
	}
}