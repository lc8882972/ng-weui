import { Component, Output, OnInit, HostListener, ViewEncapsulation, ElementRef, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    encapsulation: ViewEncapsulation.None,
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {
    @Output('clickme') clickme = new EventEmitter();
    _active = false;
    constructor(private ref: ElementRef) { }

    @HostListener('click', ["$event"]) onClick(event: TouchEvent) {
        this._active = true;
        this.clickme.emit(this);
    }

    ngOnInit() {
       
    }
}