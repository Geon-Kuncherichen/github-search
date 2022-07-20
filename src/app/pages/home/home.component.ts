import { Component, OnInit ,OnChanges,ChangeDetectorRef} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any=null;
  userName=''
  error=''


  constructor(private githubService:GithubService,private ref:ChangeDetectorRef) { }

  findUser()
  {
    this.githubService.getUserDetails(this.userName).subscribe((item)=>{
      this.user=item;
      this.error='';
      this.ref.detectChanges();
    },(error)=>{
      this.user=null;
      this.error="User not found";
    })
  }




  ngOnInit(): void {
  }

}
