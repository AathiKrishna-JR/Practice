import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm} from "@angular/forms";

 
let username: string[] = ["aathi","krishna"];
let password: string[] = ["12345678","87654321"];
    

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
        if( login.value['email'].length == 0 || login.value['password'].length == 0)
        {
          alert("Enter value in both field");
        } 

        else if( login.value['password'].length < 8)
        {
          alert("Enter password for atleast 8 letters");
        }
        let index = username.indexOf(login.value['email']);
        let pass = password[index];
        if (pass === login.value['password']) {
            alert(login.value['email']+" sucessfully logined");
        } else {
            alert("Invalid credentials");
        }
    }
        
    }

    


export class CardOverviewExample {}
