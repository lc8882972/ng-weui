import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'some-component',
  template: `
    <h1>I am Shadow DOM!</h1>
    <h2>Nice to meet you :)</h2>
    <ng-content></ng-content>
  `
})
export class SomeComponent { /* ... */ }

@Component({
  selector: 'another-component', 
  template: `
    <some-component>
      <h1>Hi! I am Light DOM!</h1>
      <h2>So happy to see you!</h2>
    </some-component>
  `
})
export class AnotherComponent { 
  
 }