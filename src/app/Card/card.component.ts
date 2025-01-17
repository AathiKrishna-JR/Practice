import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm} from "@angular/forms";

@Component({
    selector: 'app-card',
    standalone : true,
    imports: [FormsModule , CommonModule, ],
    templateUrl : './card.component.html',
    styleUrls :  ['./card.component.css',]
})


export class CardComponent {

    onLogin(login : NgForm)
    {
        console.log(login);
        
    }
    
}

export class CardOverviewExample {}
