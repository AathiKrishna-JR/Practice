import { Component } from '@angular/core';
import {HelloWorldComponent} from './World/hello-world.component';
import { PlaceComponent } from './Place/place.component';
import { DetailComponent } from './Details/details.component';
import { w7 } from './Place/w7';

@Component({
selector: 'app-root',
standalone: true,
imports : [ HelloWorldComponent,PlaceComponent,DetailComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
})
export class AppComponent {
    places = w7;
    message : string = ' ';

    send(childMessage : string )
    {
        this.message = childMessage;
    }
    
}