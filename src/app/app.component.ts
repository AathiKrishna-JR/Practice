import { Component } from '@angular/core';
import {HelloWorldComponent} from './World/hello-world.component';

@Component({
selector: 'app-root',
standalone: true,
imports : [ HelloWorldComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
})
export class AppComponent {}