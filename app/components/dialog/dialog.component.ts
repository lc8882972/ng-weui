import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'we-alert',
    template: `<div *ngIf="option.show">
               <div class="weui-mask"></div>
               <div class="weui-dialog">
               <div class="weui-dialog__bd">{{option.msg}}</div>
               <div class="weui-dialog__ft">
                    <a (click)="okClick()" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">{{option.ok}}</a>
               </div>
               </div>
               </div>`
})
export class AlertComponent implements OnInit {
    @Input('option') option: DialogOption
    @Output('ok') ok = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    okClick(): void {
        this.option.show = false;
        this.ok.emit();
    }
}

@Component({
    moduleId: module.id,
    selector: 'we-dialog',
    template: `<div *ngIf="option.show">
                 <div class="weui-mask"></div>
                 <div class="weui-dialog">
                   <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{option.title}}</strong></div>
                   <div class="weui-dialog__bd">{{option.msg}}</div>
                   <div class="weui-dialog__ft">
                     <a (click) ="okClick()" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">{{option.ok}}</a>
                     <a (click) ="cancelClick()" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">{{option.cancel}}</a>
                   </div>
                  </div>
                </div>`
})
export class DialogComponent implements OnInit {
    @Input('option') option: DialogOption;
    @Output('ok') ok = new EventEmitter();
    @Output('cancel') cancel = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    okClick() { 
        this.option.show=false;
        this.ok.emit();
    }

    cancelClick(){
        this.option.show=false;
        this.cancel.emit();
    }
}

export class DialogOption {
    show: boolean = false;
    title: string;
    msg: string;
    ok: string = '确定';
    cancel: string = '取消';
}