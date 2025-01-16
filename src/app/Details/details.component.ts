import { Component , Input } from '@angular/core';

@Component ({
    selector: 'app-details',
    standalone: true,
    templateUrl:'./details.component.html',
    styleUrl : './details.component.css',
})
export class DetailComponent {
    @Input() location !: string ;
    
}