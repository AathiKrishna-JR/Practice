import { Component , EventEmitter, Input, Output } from '@angular/core';
import { w7 } from './w7';

@Component ({
    selector: 'app-place',
    standalone: true,
    templateUrl:'./place.component.html',
    styleUrl : './place.component.css',
})
export class PlaceComponent {
    places:string[] =[];
    @Input({required : true }) place !: string ;
    @Input({required : true }) location !: string ;

    @Output() loc = new EventEmitter<string>();

    onSelectPlace()
    {
         
         this.loc.emit(this.location);
    }
}