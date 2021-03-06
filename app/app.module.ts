import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { SomeComponent, AnotherComponent } from './test.component';
import { AComponent } from './views/a/a.component';
import { BComponent } from './views/b/b.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent, DialogComponent } from './components/dialog/dialog.component';
import { ToastComponent } from './components/toast/toast.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ItemComponent } from './components/item/item.component';
import { TabHeadComponent } from './components/tabhead/tabhead.component';
import { TabBodyComponent } from './components/tabbody/tabbody.component';

import { UserService } from './servicers/user.service';

import { routing } from './app.routes';
@NgModule({
  imports: [BrowserModule, HttpModule,routing],
  declarations: [AppComponent,
    AComponent,
    BComponent,
    ButtonComponent,
    AlertComponent,
    DialogComponent,
    ToastComponent,
    UploaderComponent,
    SomeComponent,
    AnotherComponent,
    TabsComponent,
    ItemComponent,
    TabHeadComponent,
    TabBodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
