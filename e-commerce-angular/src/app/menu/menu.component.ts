import {Component, Input} from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() isLogged!:boolean;
  @Input() isAdmin!:boolean;
  @Input() username!:string;
  constructor(private loginService:LoginService) {
  }

  public login():void{
    this.loginService.login();
  }

  public logout():void{
    this.loginService.logout();
  }
}
