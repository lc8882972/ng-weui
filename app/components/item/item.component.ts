import { Component, Output, OnInit, HostListener, ViewEncapsulation, ElementRef, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    encapsulation: ViewEncapsulation.None,
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss']
})
export class ItemComponent implements OnInit {
    @Output('clickme') clickme = new EventEmitter();
    _active = false;
    constructor(private ref: ElementRef) { }

    @HostListener('click', ["$event"]) onClick(event: Event) {
        this._active = true;
        this.clickme.emit(this);
    }

    ngOnInit() {
       
    }
}