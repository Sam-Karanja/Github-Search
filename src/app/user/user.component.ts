import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import {faStar,faCode,faEye,faSearch,faFolder,faLink} from '@fortawesome/free-solid-svg-icons';
import { Repo } from '../Repo';
import { Users } from '../Users';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {


  userDetails!: Users;
  topics!:string;
  repos!: Repo[];
  defaultUser!:Users;

  // icons
  faEye = faEye;
  faStar = faStar;
  faCode = faCode;
  faSearch = faSearch;
  faFolder = faFolder;
  faLink = faLink;

  constructor(private _githubService: GithubService) {


  }
  ngOnInit(){
     this.getUserDetails('Sam-Karanja')
  }



  getUserDetails(username:string){
    this._githubService.getUser(username).then(

      (success)=>{
        this.userDetails = this._githubService.user;
        console.log(success)
      },
      (error)=>{
        alert("User not found");
        console.log(error)
      }
    );

    this._githubService.getUserRepos(username).then(
      ()=>{
        this.repos = this._githubService.userRepos;
      },
      (error)=>{
        console.log(error)
      }
    )
   
  }



}