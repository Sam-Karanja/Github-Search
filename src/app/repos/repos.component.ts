import { Component, OnInit } from '@angular/core';
import {faStar,faCode,faEye,faLink,faFolder,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { GithubService } from '../github.service';
import { Repo } from '../Repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
 
  repos!: any;


  // icons
  faEye = faEye;
  faStar = faStar;
  faCode = faCode;
  faFolder = faFolder;
  faLink = faLink;
  faArrowLeft = faArrowLeft;

  constructor(private _githubService:GithubService) { }

  ngOnInit() {
    this.getRepos("Sam-Karanja")
  }



  getRepos(name:string){

    this._githubService.getUserRepos(name).subscribe(
       (response)=> {
        console.log(response);
      },
       (error)=> {
        console.log(error);
      }
    );
      // this._githubService.searchRepos(repoName).then(
      //   ()=>{
      //        this.repos = this._githubService.repos;
      //        console.log(this.repos);
      //   },
      //   (error)=>{
      //     alert("An error occured please try again");
      //   }
      // )

  }

}
