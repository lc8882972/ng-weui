import { Component, Output, Input, OnInit, HostListener, ContentChild, AfterContentInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TabHeadComponent } from '../tabhead/tabhead.component'
import { TabBodyComponent } from '../tabbody/tabbody.component'

@Component({
    moduleId: module.id,
    encapsulation: ViewEncapsulation.None,
    selector: 'tabs',
    entryComponents: [TabBodyComponent, TabHeadComponent],
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

    @ContentChild(TabBodyComponent) tabhead: TabHeadComponent;
    @ContentChild(TabBodyComponent) tabbody: TabBodyComponent;
    @Output('change') change = new EventEmitter();
    @Input("class") cls: string;
    start = 0;
    end = 0;
    moved = 0;
    clientX = document.body.clientWidth;
    timestamp = 0;
    regex: RegExp = /\.*translate3d\((.*)\)/i;
    len = 3;
    margin_left = 0;
    margin_right = -((this.len - 1) * this.clientX);
    ele_content: HTMLElement = null;
    ele_span: HTMLElement = null;
    constructor() {

    }


    ngAfterContentInit() {
        this.ele_content = <HTMLElement>document.querySelector('.tab-content');



        this.len = this.tabbody.items.length;
        let head = document.querySelector('.tab-head');
        if (head == null) return;
        this.ele_span = <HTMLElement>document.querySelector('.pspan');
        var header_items = head.getElementsByTagName('item');
        var that = this;
        for (let i = 0; i < header_items.length; i++) {
            header_items[i].addEventListener('click', function () {
                that.moveTo(i + 1);
            })
        }
    }
    ngOnInit() {

    }

    @HostListener('touchstart', ["$event"]) onTouchStart(event: TouchEvent) {
        this.start = event.touches[0].clientX;
        this.timestamp = new Date().getTime();
    }

    @HostListener('touchmove', ["$event"]) onTouchMove(event: TouchEvent) {
        event.preventDefault();
        var tempDate = new Date();

        if (tempDate.getTime() - this.timestamp < 100) return;

        this.timestamp = tempDate.getTime();
        var temp = Math.round(event.touches[0].clientX - this.start);

        this.moved += temp;
        this.start = event.touches[0].clientX;

        var oldTextM = this.ele_content.style.webkitTransform;
        var oldSpanTextM = this.ele_span.style.webkitTransform;

        let point = this.matchPoint(oldTextM);
        console.log(point);
        if (oldTextM == "") {

            this.ele_content.style.webkitTransform = 'translate3d(' + temp + 'px,0,0)';
            this.ele_span.style.webkitTransform = 'translate3d(' + (Math.round((Math.abs(temp) / this.len))) + 'px,0,0)';

            return;
        }
        var oldValM = parseInt(this.regex.exec(oldTextM)[1]);
        var oldSpanValM = parseInt(this.regex.exec(oldSpanTextM)[1]);

        let newVal = (oldValM + temp);
        this.ele_content.style.webkitTransform = 'translate3d(' + newVal + 'px,0,0)';
        this.ele_span.style.webkitTransform = 'translate3d(' + Math.abs(newVal) / this.len + 'px,0,0)';
    }

    @HostListener('touchend', ["$event"]) onTouchEnd(event: TouchEvent) {
        this.end = event.changedTouches[0].clientX;

        var moved = this.moved;
        this.moved = 0;
        var tran = (Math.abs(moved) / document.body.clientWidth) * 100;

        var oldText = this.ele_content.style.webkitTransform;
        var oldSpanText = this.ele_span.style.webkitTransform;

        let point = this.matchPoint(oldText);
        var oldVal = point.x;
        var oldSpanVal = parseInt(this.regex.exec(oldSpanText)[1]);
        var t = this.clientX - (Math.abs(oldVal) % this.clientX);

        var spanW = this.clientX / 3;
        // 如果超过屏幕的 25% 则切换页面
        if (tran > 25) {
            if (moved > 0) {
                t = oldVal + (Math.abs(oldVal) % this.clientX);
                if (t > 0) {
                    this.ele_content.style.webkitTransform = 'translate3d(0px,0px,0px)';
                    this.ele_span.style.webkitTransform = 'translate3d(0px,0px,0px)';
                } else {
                    var x = oldSpanVal % spanW;
                    this.ele_content.style.webkitTransform = 'translate3d(' + t + 'px,0,0)';
                    this.ele_span.style.webkitTransform = 'translate3d(' + (Math.abs(t) / this.len) + 'px,0,0)';
                }
            } else {
                t = oldVal - t;
                if (t < this.margin_right) {
                    this.ele_content.style.webkitTransform = 'translate3d(' + this.margin_right + 'px,0,0)';
                    this.ele_span.style.webkitTransform = 'translate3d(' + Math.round(this.margin_right / this.len) + 'px,0,0)';
                } else {
                    this.ele_content.style.webkitTransform = 'translate3d(' + t + 'px,0,0)';
                    this.ele_span.style.webkitTransform = 'translate3d(' + (Math.abs(t) / this.len) + 'px,0,0)';
                }
            }

            this.change.emit(1);
        } else {
            // 还原页面
            if (moved > 0) {
                t = oldVal - moved;
                if (t > 0) {
                    this.ele_content.style.webkitTransform = 'translate3d(0px,0px,0px)';
                    this.ele_span.style.webkitTransform = 'translate3d(0px,0px,0px)';
                } else {
                    var x = oldSpanVal + Math.round(moved / this.len);
                    this.ele_content.style.webkitTransform = 'translate3d(' + t + 'px,0,0)';
                    this.ele_span.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
                }
            } else {
                t = oldVal - moved;
                if (t < this.margin_right) {
                    this.ele_content.style.webkitTransform = 'translate3d(' + this.margin_right + ')';
                    this.ele_span.style.webkitTransform = 'translate3d(' + Math.round(this.clientX * 0.66) + 'px,0,0)';
                } else {
                    var x = oldSpanVal + Math.round(moved / this.len);
                    this.ele_content.style.webkitTransform = 'translate3d(' + t + 'px,0,0)';
                    this.ele_span.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
                }
            }
        }
    }

    moveTo(index: number) {

        if (index > this.len || index < 0) {
            throw "索引超出范围";
        }
        var oldText = this.ele_content.style.webkitTransform;
        var oldSpanText = this.ele_span.style.webkitTransform;

        var oldVal = parseInt(this.regex.exec(oldText)[1]);
        var oldSpanVal = parseInt(this.regex.exec(oldSpanText)[1]);
        var temp = (index - 1) * this.clientX;
        this.ele_content.style.webkitTransform = 'translate3d(' + (-temp) + 'px,0,0)';
        this.ele_span.style.webkitTransform = 'translate3d( ' + Math.round(temp / this.len) + 'px,0,0)';
        this.change.emit(1);
    }

    matchPoint(str: string): Point {
        if (str == '' || str == null) return new Point();
        let temp = this.regex.exec(str)[1];
        let array = temp.split(',');

        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].replace('px', '');
        }
        var point = new Point();

        point.x = parseInt(array[0]);
        point.y = parseInt(array[1]);
        point.z = parseInt(array[2]);
        return point;
    }
}

class Point {
    x: number = 0;
    y: number = 0;
    z: number = 0;
}