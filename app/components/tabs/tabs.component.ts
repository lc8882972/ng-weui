import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';
import { TabHeadComponent } from '../tabhead/tabhead.component'
import { TabBodyComponent } from '../tabbody/tabbody.component'

@Component({
    moduleId: module.id,
    selector: 'tabs',
    entryComponents: [TabBodyComponent],
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit, AfterContentInit {

    @ContentChild(TabBodyComponent) tabhead: TabHeadComponent;
    @ContentChild(TabBodyComponent) tabbody: TabBodyComponent;
    start = 0;
    end = 0;
    allMove = 0;
    clientX = document.body.clientWidth;
    timestamp = 0;
    transZRegex: RegExp = /\.*translateX\((.*)\)/i;
    ele_content: HTMLElement;
    ele_span: HTMLElement;
    len = 3;
    margin_left = 0;
    margin_right = -((this.len - 1) * this.clientX);
    constructor() { }

    ngAfterViewInit() {

    }

    ngAfterContentInit() {
        // contentChild is set
        // containerChild is set
        this.len = this.tabbody.items.length;
    }
    ngOnInit() {
        this.ele_content = <HTMLElement>document.querySelector('.tab-content');
        this.ele_span = <HTMLElement>document.querySelector('.pspan');
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

        this.allMove += temp;
        this.start = event.touches[0].clientX;

        var oldTextM = this.ele_content.style.webkitTransform;
        var oldSpanTextM = this.ele_span.style.webkitTransform;

        if (oldTextM == "") {

            this.ele_content.style.webkitTransform = 'translateX(' + temp + 'px)';
            this.ele_span.style.webkitTransform = 'translateX(' + (Math.round((Math.abs(temp) / 3))) + 'px)';

            return;
        }
        var oldValM = parseInt(this.transZRegex.exec(oldTextM)[1]);
        var oldSpanValM = parseInt(this.transZRegex.exec(oldSpanTextM)[1]);

        if (temp < 0) {
            // rigth -> left
            this.ele_content.style.webkitTransform = 'translateX(' + (oldValM + temp) + 'px)';
            this.ele_span.style.webkitTransform = 'translateX(' + (oldSpanValM + Math.round((Math.abs(temp) / 3))) + 'px)';

        } else {

            // left -> rigth
            this.ele_content.style.webkitTransform = 'translateX(' + (oldValM + temp) + 'px)';
            this.ele_span.style.webkitTransform = 'translateX(' + (oldSpanValM - Math.round((Math.abs(temp) / 3))) + 'px)';
        }
    }

    @HostListener('touchend', ["$event"]) onTouchEnd(event: TouchEvent) {
        this.end = event.changedTouches[0].clientX;

        var moved = this.allMove;
        this.allMove = 0;
        var tran = (Math.abs(moved) / document.body.clientWidth) * 100;

        var oldText = this.ele_content.style.webkitTransform;
        var oldSpanText = this.ele_span.style.webkitTransform;


        var oldVal = parseInt(this.transZRegex.exec(oldText)[1]);
        var oldSpanVal = parseInt(this.transZRegex.exec(oldSpanText)[1]);
        var t = this.clientX - (Math.abs(oldVal) % this.clientX);

        var spanW = this.clientX / 3;
        // 如果超过屏幕的 25% 则切换页面
        if (tran > 25) {
            if (moved > 0) {
                t = oldVal + (Math.abs(oldVal) % this.clientX);
                if (t > 0) {
                    this.ele_content.style.webkitTransform = 'translateX(0px)';
                    this.ele_span.style.webkitTransform = 'translateX(0px)';
                } else {
                    var x = oldSpanVal % spanW;
                    this.ele_content.style.webkitTransform = 'translateX(' + t + 'px)';
                    this.ele_span.style.webkitTransform = 'translateX(' + (oldSpanVal - x) + 'px)';
                }


            } else {
                t = oldVal - t;
                if (t < this.margin_right) {
                    this.ele_content.style.webkitTransform = 'translateX(' + this.margin_right + 'px)';
                    this.ele_span.style.webkitTransform = 'translateX(' + Math.round(this.clientX * 0.66) + 'px)';
                } else {
                    this.ele_content.style.webkitTransform = 'translateX(' + t + 'px)';
                    var x = spanW - (Math.abs(oldSpanVal) % spanW);
                    this.ele_span.style.webkitTransform = 'translateX(' + (oldSpanVal + x) + 'px)';
                }
            }
        } else {
            // 还原页面
            if (moved > 0) {
                t = oldVal - moved;
                if (t > 0) {
                    this.ele_content.style.webkitTransform = 'translateX(0px)';
                    this.ele_span.style.webkitTransform = 'translateX(0px)';
                } else {
                    var x = oldSpanVal + Math.round(moved / this.len);
                    this.ele_content.style.webkitTransform = 'translateX(' + t + 'px)';
                    this.ele_span.style.webkitTransform = 'translateX(' + x + 'px)';
                }
            } else {
                t = oldVal - moved;
                if (t < this.margin_right) {
                    this.ele_content.style.webkitTransform = 'translateX(' + this.margin_right + ')';
                    this.ele_span.style.webkitTransform = 'translateX(' + Math.round(this.clientX * 0.66) + 'px)';
                } else {
                    var x = oldSpanVal + Math.round(moved / this.len);
                    this.ele_content.style.webkitTransform = 'translateX(' + t + 'px)';
                    this.ele_span.style.webkitTransform = 'translateX(' + x + 'px)';
                }
            }
        }
    }
}