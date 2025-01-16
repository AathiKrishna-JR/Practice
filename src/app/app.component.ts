import { Component } from '@angular/core';
import {HelloWorldComponent} from './World/hello-world.component';
import { PlaceComponent } from './Place/place.component';

@Component({
selector: 'app-root',
standalone: true,
imports : [ HelloWorldComponent,PlaceComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
})
export class AppComponent {}