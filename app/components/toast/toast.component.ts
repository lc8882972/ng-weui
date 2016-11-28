import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'we-toast',
    template: `
    <div *ngIf ="option.show">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">{{option.msg}}</p>
        </div>
     </div>`
})
export class ToastComponent implements OnInit {
    @Input('option') option: Option;
    constructor() { }
    ngOnInit() { }
}

class Option {
    show: boolean = false;
    msg: string = '已完成';
}