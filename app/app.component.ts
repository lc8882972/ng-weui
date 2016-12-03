import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl:'app.component.html',
    styleUrls:['app.component.css']
})
export class AppComponent {
    // clicked: boolean = false;
    // show: boolean = false;
    // weclick(): void {
    //     this.option.show = true;
    //     console.log('clicked');
    // }

    // ok(): void {
    //     console.log('ok');
    // }

    // option = {
    //     show: false,
    //     msg: '萨达萨达萨达',
    //     ok: '确定'
    // }

    change(index :Number){
        console.log(index);
    }
}
