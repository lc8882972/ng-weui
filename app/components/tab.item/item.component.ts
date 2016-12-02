import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tab-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {
    constructor() { }

    @HostListener('click', ["$event"]) onClick(event: TouchEvent) {
        console.log('clickme');
    }
    ngOnInit() { }

    

}