import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-login-firebase';

  constructor(private authService:AuthService){
    authService.getUser().subscribe((item)=>{
      console.log(item)
    },err=>{
      console.log(err)
    })
  }


}
