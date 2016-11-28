import { Component,Directive, OnInit, HostListener,ElementRef } from '@angular/core';
import { Http } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'we-uploader',
    templateUrl: 'uploader.component.html'
})
export class UploaderComponent implements OnInit {

    @HostListener('change') onChange() {

    }
    constructor(private http: Http) { }

    ngOnInit() { }

    fileChange(e:EventTarget){
        console.log(e);
        console.log('FileChange');

        this.http.post('',{});
    }
}
