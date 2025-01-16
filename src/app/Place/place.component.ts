import { Component } from '@angular/core';
import { w7 } from './w7';

@Component ({
    selector: 'app-place',
    standalone: true,
    templateUrl:'./place.component.html',
    styleUrl : './place.component.css',
})
export class PlaceComponent {
  
    selectedplace = w7[0]
}