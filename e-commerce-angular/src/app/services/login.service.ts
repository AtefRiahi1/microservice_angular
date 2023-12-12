import { Injectable } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private oauthservices:OAuthService) { }

  public login():void{
    this.oauthservices.initImplicitFlowInternal();
  }

  public logout():void{
    this.oauthservices.logOut();
  }
}
