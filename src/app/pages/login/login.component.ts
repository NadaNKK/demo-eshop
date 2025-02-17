import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
//   {
//     username: "mor_2314",
//     password: "83r5^_"
// }
  constructor(private authService:AuthService) { }
  data: {username:string,password:string} | null= null;
  loginCall(){
    this.authService.login(this.data).subscribe({
   //success
      next: (res:any)=> {
        console.log("result:",res);
      },
      error: ()=> {},
      complete: ()=> {}
    })
  }
}

