import { Component } from '@angular/core';
import {HelloWorldComponent} from './World/hello-world.component';
import { PlaceComponent } from './Place/place.component';
import { DetailComponent } from './Details/details.component';
import { w7 } from './Place/w7';
import { CardComponent } from './Card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-root',
standalone: true,
imports : [ HelloWorldComponent,PlaceComponent,DetailComponent,CardComponent,FormsModule],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
})
export class AppComponent {
    places = w7;
    selectedPlace = 'w1 '
    message : string = ' ';
    Nmessage : string = "no message";
    send(childMessage : string )
    {
        this.message = childMessage;
    }

}