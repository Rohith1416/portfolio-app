import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public activeTab: any = "home";
  constructor(public router: Router){

  }
  ngOnInit(): void {
    this.gotoHome();
  }

  gotoHome(){
    this.activeTab = "home";
    this.router.navigate(['home']);
  }

  gotoPortfolio(){
    this.activeTab = "portfolio";
    this.router.navigate(['portfolio'])
  }

}
