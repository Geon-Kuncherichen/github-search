import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any='';
  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService) {

    authService.getUser().subscribe((user)=>{
        this.email=user?.email;
    })
   }

  /*async handleSignOut()
  {
    try{
      const response=await this.authService.signOut();
      this.router.navigateByUrl('/signin')
      this.toastr.info('login again to continue')
      this.email=''
    }catch(error)
    {
        this.toastr.error('something is wrong')
    }
  }*/
  handleSignOut()
  {
    this.authService.signOut().subscribe(()=>{
    
      this.toastr.info('succesfuly logged out')
      this.email=''
      this.router.navigateByUrl('/signin')
    },(error)=>{
      this.toastr.error('error..not logged out')
    },()=>{
      console.log('logout completed')
    })
  }




  ngOnInit(): void {
  }




}
