import { Component, Input, OnInit,OnChanges,ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {


  @Input() repoUrl:string=''
  repos:any=[]
  constructor(private githubService:GithubService,private ref:ChangeDetectorRef) { }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.repoUrl)
    {
      this.githubService.getRepos(this.repoUrl).subscribe((item)=>{
        this.repos=item;
        this.ref.detectChanges();
      },
      (error)=>{
        console.table(error)
      });

    }
  }

  ngOnInit(): void {
  }


  

}
