import { Component,Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'we-loading',
    template: `
    <div *ngIf='option.show'>
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">{{option.msg}}</p>
        </div>
    </div>
    `
})
export class LoadingComponent implements OnInit {
    @Input('option') option:Option;
    constructor() { }

    ngOnInit() { }
}

class Option {
    show: boolean = false;
    msg:string='数据加载中';
}