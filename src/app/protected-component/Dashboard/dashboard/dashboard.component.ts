import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cookieValue;
  cookiesData;

  constructor(private cookieService:CookieService) { }

  ngOnInit() {

    this.cookieValue = this.cookieService.get('usersinfo');
    this.cookiesData = JSON.parse(this.cookieValue);
    console.log(this.cookiesData.id);


  }



}
