import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '964ed2e56a1fa80dab53';
  private clientsecret = 'e397e48b1f3ca1df06616a4f9024ca783dbcd8c5';

  constructor(private http:Http) { 
    console.log("Service in now ready!");
    this.username = 'Brayonski';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  .map(res => res.json());
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  .map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }

}

