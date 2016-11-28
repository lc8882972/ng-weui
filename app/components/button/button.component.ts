import { Component,Input, OnInit,ContentChild,AfterContentInit,ElementRef  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'we-button',
    template: `<a href="javascript:;" class="weui-btn {{class}}" style="{{style}} " [ngClass]="{'weui-btn_disabled': disabled}">
                 <ng-content></ng-content>
               </a>`
})
export class ButtonComponent implements OnInit,AfterContentInit {
    @Input('class') class:string;
    @Input('style') style:string;
    @Input("disabled") disabled: boolean = false;
    @ContentChild('someDiv') btnValue: ElementRef;
    constructor() { }

    ngOnInit() { }
    ngAfterContentInit(){
        console.log(this.btnValue);
    }
}